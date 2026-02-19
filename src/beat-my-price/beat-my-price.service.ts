import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventsService } from '../events/events.service';
import { CreateBeatMyPriceDto } from './dto/create-beat-my-price.dto';
import { UpdateBeatMyPriceDto } from './dto/update-beat-my-price.dto';

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

@Injectable()
export class BeatMyPriceService {
  constructor(
    private prisma: PrismaService,
    private eventsService: EventsService,
  ) {}

  async create(dto: CreateBeatMyPriceDto) {
    const req = await this.prisma.beatMyPriceRequest.create({
      data: {
        origin: dto.origin,
        destination: dto.destination,
        competitorPrice: dto.competitorPrice,
        competitorUrl: dto.competitorUrl,
        screenshotUrl: dto.screenshotUrl,
        phone: dto.phone,
        email: dto.email,
      },
    });

    this.eventsService.emitNewBeatMyPrice({
      id: req.id,
      email: req.email,
      origin: req.origin ?? undefined,
      destination: req.destination ?? undefined,
      competitorPrice: req.competitorPrice ? Number(req.competitorPrice) : undefined,
      createdAt: req.createdAt,
    });

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
    if (query?.dateFrom || query?.dateTo) {
      const createdAt: Record<string, Date> = {};
      if (query?.dateFrom) createdAt.gte = new Date(query.dateFrom);
      if (query?.dateTo) {
        const end = new Date(query.dateTo);
        end.setDate(end.getDate() + 1);
        createdAt.lte = end;
      }
      where.createdAt = createdAt;
    }
    if (query?.agentId) {
      where.agentId = query.agentId === 'unassigned' ? null : query.agentId;
    }

    return where;
  }

  async findAll(query?: FindAllQuery) {
    const page = query?.page || 1;
    const limit = query?.limit || 25;
    const skip = (page - 1) * limit;
    const where = this.buildWhereClause(query);

    const orderBy: Record<string, string> = {};
    const sortBy = query?.sortBy || 'createdAt';
    orderBy[sortBy] = query?.sortOrder || 'desc';

    const [data, total] = await Promise.all([
      this.prisma.beatMyPriceRequest.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: { agent: { select: { id: true, name: true } } },
      }),
      this.prisma.beatMyPriceRequest.count({ where }),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const item = await this.prisma.beatMyPriceRequest.findUnique({
      where: { id },
      include: { agent: { select: { id: true, name: true } } },
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
      include: { agent: { select: { id: true, name: true } } },
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
    const orderBy: Record<string, string> = {};
    orderBy[query?.sortBy || 'createdAt'] = query?.sortOrder || 'desc';

    const items = await this.prisma.beatMyPriceRequest.findMany({
      where,
      orderBy,
      include: { agent: { select: { id: true, name: true } } },
    });

    const headers = [
      'ID', 'Email', 'Phone', 'Origin', 'Destination',
      'Competitor Price', 'Competitor URL', 'Our Price',
      'Status', 'Agent', 'Screenshot', 'Created At',
    ];

    const escape = (val: string) =>
      val.includes(',') || val.includes('"') || val.includes('\n')
        ? `"${val.replace(/"/g, '""')}"`
        : val;

    const rows = items.map((item) =>
      [
        item.id,
        item.email,
        item.phone || '',
        item.origin || '',
        item.destination || '',
        item.competitorPrice?.toString() || '',
        item.competitorUrl || '',
        item.ourPrice?.toString() || '',
        item.status,
        (item as any).agent?.name || '',
        item.screenshotUrl || '',
        item.createdAt.toISOString(),
      ].map(escape).join(','),
    );

    return [headers.join(','), ...rows].join('\n');
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
