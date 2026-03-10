import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventsService } from '../events/events.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { parsePagination, paginatedResult } from '../common/utils/pagination';
import { buildCsv } from '../common/utils/csv';
import { buildDateRange } from '../common/utils/query';

interface FindAllQuery {
  page?: number;
  limit?: number;
  status?: string;
  source?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  dateFrom?: string;
  dateTo?: string;
  cabinClass?: string;
  agentId?: string;
}

const AGENT_SELECT = { select: { id: true, name: true } } as const;

@Injectable()
export class LeadsService {
  constructor(
    private prisma: PrismaService,
    private eventsService: EventsService,
  ) {}

  async create(dto: CreateLeadDto) {
    const lead = await this.prisma.lead.create({
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        message: dto.message,
        origin: dto.origin,
        destination: dto.destination,
        departDate: dto.departDate ? new Date(dto.departDate) : undefined,
        returnDate: dto.returnDate ? new Date(dto.returnDate) : undefined,
        cabinClass: dto.cabinClass,
        passengersAdults: dto.passengersAdults ?? 1,
        passengersChildren: dto.passengersChildren ?? 0,
        passengersInfants: dto.passengersInfants ?? 0,
        quotedPrice: dto.quotedPrice,
        formLocation: dto.formLocation,
        abVariant: dto.abVariant,
        source: dto.source,
        sourceUrl: dto.sourceUrl,
        utmSource: dto.utmSource,
        utmMedium: dto.utmMedium,
        utmCampaign: dto.utmCampaign,
      },
    });

    this.eventsService.emitNewLead({
      id: lead.id,
      name: lead.name,
      phone: lead.phone,
      origin: lead.origin ?? undefined,
      destination: lead.destination ?? undefined,
      cabinClass: lead.cabinClass ?? undefined,
      source: lead.source ?? undefined,
      createdAt: lead.createdAt,
    });

    return lead;
  }

  private buildWhereClause(query?: FindAllQuery) {
    const where: Record<string, unknown> = {};

    if (query?.status) where.status = query.status;
    if (query?.source) where.source = { contains: query.source };
    if (query?.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { email: { contains: query.search, mode: 'insensitive' } },
        { phone: { contains: query.search } },
      ];
    }

    const dateRange = buildDateRange(query?.dateFrom, query?.dateTo);
    if (dateRange) where.createdAt = dateRange;

    if (query?.cabinClass) where.cabinClass = query.cabinClass;
    if (query?.agentId) {
      where.agentId = query.agentId === 'unassigned' ? null : query.agentId;
    }

    return where;
  }

  async findAll(query?: FindAllQuery) {
    const { page, limit, skip, orderBy } = parsePagination(query);
    const where = this.buildWhereClause(query);

    const [data, total] = await Promise.all([
      this.prisma.lead.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: { agent: AGENT_SELECT },
      }),
      this.prisma.lead.count({ where }),
    ]);

    return paginatedResult(data, total, page, limit);
  }

  async findOne(id: string) {
    const lead = await this.prisma.lead.findUnique({
      where: { id },
      include: { agent: { select: { id: true, name: true, email: true } } },
    });
    if (!lead) throw new NotFoundException('Lead not found');
    return lead;
  }

  async update(id: string, dto: UpdateLeadDto) {
    await this.findOne(id);
    return this.prisma.lead.update({
      where: { id },
      data: {
        status: dto.status,
        agentId: dto.agentId,
        agentNotes: dto.agentNotes,
        quotedPrice: dto.quotedPrice,
      },
      include: { agent: AGENT_SELECT },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.lead.delete({ where: { id } });
  }

  // ── Stats ──

  async getStats() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [total, newToday, bookedCount] = await Promise.all([
      this.prisma.lead.count(),
      this.prisma.lead.count({ where: { createdAt: { gte: today } } }),
      this.prisma.lead.count({ where: { status: 'booked' } }),
    ]);

    return {
      total,
      newToday,
      conversionRate: total > 0 ? ((bookedCount / total) * 100).toFixed(1) : '0',
    };
  }

  // ── CSV Export ──

  async exportCsv(query?: FindAllQuery): Promise<string> {
    const where = this.buildWhereClause(query);
    const { orderBy } = parsePagination(query);

    const leads = await this.prisma.lead.findMany({
      where,
      orderBy,
      include: { agent: AGENT_SELECT },
    });

    return buildCsv(
      ['ID', 'Name', 'Email', 'Phone', 'Origin', 'Destination',
       'Cabin Class', 'Status', 'Agent', 'Quoted Price', 'Source',
       'A/B Variant', 'Created At'],
      leads.map((lead) => [
        lead.id,
        lead.name,
        lead.email || '',
        lead.phone,
        lead.origin || '',
        lead.destination || '',
        lead.cabinClass || '',
        lead.status,
        (lead as { agent?: { name: string } }).agent?.name || '',
        lead.quotedPrice?.toString() || '',
        lead.source || '',
        lead.abVariant || '',
        lead.createdAt.toISOString(),
      ]),
    );
  }

  // ── Bulk Operations ──

  async bulkUpdateStatus(ids: string[], status: string) {
    return this.prisma.lead.updateMany({
      where: { id: { in: ids } },
      data: { status },
    });
  }

  async bulkAssignAgent(ids: string[], agentId: string | null) {
    return this.prisma.lead.updateMany({
      where: { id: { in: ids } },
      data: { agentId },
    });
  }

  async bulkDelete(ids: string[]) {
    return this.prisma.lead.deleteMany({
      where: { id: { in: ids } },
    });
  }
}
