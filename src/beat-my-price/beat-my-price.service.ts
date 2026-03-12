import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventsService } from '../events/events.service';
import { CreateBeatMyPriceDto } from './dto/create-beat-my-price.dto';
import { UpdateBeatMyPriceDto } from './dto/update-beat-my-price.dto';
import { parsePagination, paginatedResult } from '../common/utils/pagination';
import { buildCsv } from '../common/utils/csv';
import { buildDateRange } from '../common/utils/query';

interface FindAllQuery {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  dateFrom?: string;
  dateTo?: string;
  agentId?: string;
}

const AGENT_SELECT = { select: { id: true, name: true } } as const;

const CSV_EXPORT_LIMIT = 10_000;

@Injectable()
export class BeatMyPriceService {
  private readonly logger = new Logger(BeatMyPriceService.name);

  constructor(
    private prisma: PrismaService,
    private eventsService: EventsService,
  ) {}

  async create(dto: CreateBeatMyPriceDto) {
    const req = await this.prisma.beatMyPriceRequest.create({
      data: {
        origin: dto.origin,
        destination: dto.destination,
        cabinClass: dto.cabinClass,
        competitorPrice: dto.competitorPrice,
        competitorUrl: dto.competitorUrl,
        screenshotUrl: dto.screenshotUrl,
        phone: dto.phone,
        email: dto.email,
      },
    });

    try {
      this.eventsService.emitNewBeatMyPrice({
        id: req.id,
        email: req.email,
        origin: req.origin ?? undefined,
        destination: req.destination ?? undefined,
        competitorPrice: req.competitorPrice ? Number(req.competitorPrice) : undefined,
        createdAt: req.createdAt,
      });
    } catch (err) {
      // emitNewBeatMyPrice is synchronous (Subject.next), so this catch works
      this.logger.error('Failed to emit new beat-my-price event', err instanceof Error ? err.stack : String(err));
    }

    return req;
  }

  private buildWhereClause(query?: FindAllQuery) {
    const where: Record<string, unknown> = {};

    if (query?.status) where.status = query.status;
    if (query?.search) {
      where.OR = [
        { email: { contains: query.search, mode: 'insensitive' } },
        { origin: { contains: query.search, mode: 'insensitive' } },
        { destination: { contains: query.search, mode: 'insensitive' } },
        { phone: { contains: query.search } },
      ];
    }

    const dateRange = buildDateRange(query?.dateFrom, query?.dateTo);
    if (dateRange) where.createdAt = dateRange;

    if (query?.agentId) {
      where.agentId = query.agentId === 'unassigned' ? null : query.agentId;
    }

    return where;
  }

  async findAll(query?: FindAllQuery) {
    const { page, limit, skip, orderBy } = parsePagination(query);
    const where = this.buildWhereClause(query);

    const [data, total] = await Promise.all([
      this.prisma.beatMyPriceRequest.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: { agent: AGENT_SELECT },
      }),
      this.prisma.beatMyPriceRequest.count({ where }),
    ]);

    return paginatedResult(data, total, page, limit);
  }

  async findOne(id: string) {
    const item = await this.prisma.beatMyPriceRequest.findUnique({
      where: { id },
      include: { agent: AGENT_SELECT },
    });
    if (!item) throw new NotFoundException('Request not found');
    return item;
  }

  async update(id: string, dto: UpdateBeatMyPriceDto) {
    await this.findOne(id);
    return this.prisma.beatMyPriceRequest.update({
      where: { id },
      data: {
        status: dto.status,
        ourPrice: dto.ourPrice,
        agentId: dto.agentId,
        agentNotes: dto.agentNotes,
      },
      include: { agent: AGENT_SELECT },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.beatMyPriceRequest.delete({ where: { id } });
  }

  // ── Stats ──

  async getStats() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [total, newToday, wonCount, lostCount] = await Promise.all([
      this.prisma.beatMyPriceRequest.count(),
      this.prisma.beatMyPriceRequest.count({ where: { createdAt: { gte: today } } }),
      this.prisma.beatMyPriceRequest.count({ where: { status: 'won' } }),
      this.prisma.beatMyPriceRequest.count({ where: { status: 'lost' } }),
    ]);

    const decided = wonCount + lostCount;
    return {
      total,
      newToday,
      winRate: decided > 0 ? ((wonCount / decided) * 100).toFixed(1) : '0',
    };
  }

  // ── CSV Export ──

  async exportCsv(query?: FindAllQuery): Promise<string> {
    const where = this.buildWhereClause(query);
    const { orderBy } = parsePagination(query);

    const items = await this.prisma.beatMyPriceRequest.findMany({
      where,
      orderBy,
      take: CSV_EXPORT_LIMIT,
      include: { agent: AGENT_SELECT },
    });

    return buildCsv(
      ['ID', 'Email', 'Phone', 'Origin', 'Destination', 'Cabin Class',
       'Competitor Price', 'Competitor URL', 'Our Price',
       'Status', 'Agent', 'Screenshot', 'Created At'],
      items.map((item) => [
        item.id,
        item.email,
        item.phone || '',
        item.origin || '',
        item.destination || '',
        item.cabinClass || '',
        item.competitorPrice?.toString() || '',
        item.competitorUrl || '',
        item.ourPrice?.toString() || '',
        item.status,
        (item as { agent?: { name: string } }).agent?.name || '',
        item.screenshotUrl || '',
        item.createdAt.toISOString(),
      ]),
    );
  }

  // ── Bulk Operations ──

  async bulkUpdateStatus(ids: string[], status: string) {
    return this.prisma.beatMyPriceRequest.updateMany({
      where: { id: { in: ids } },
      data: { status },
    });
  }

  async bulkAssignAgent(ids: string[], agentId: string | null) {
    return this.prisma.beatMyPriceRequest.updateMany({
      where: { id: { in: ids } },
      data: { agentId },
    });
  }

  async bulkDelete(ids: string[]) {
    return this.prisma.beatMyPriceRequest.deleteMany({
      where: { id: { in: ids } },
    });
  }
}
