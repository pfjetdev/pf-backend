import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const now = new Date();
    const todayStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    );
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const [
      totalLeads,
      leadsToday,
      leadsThisWeek,
      totalBeatMyPrice,
      activeDeals,
      leadsByStatus,
      leadsBySource,
      leadsPerDay,
      recentLeads,
    ] = await Promise.all([
      this.prisma.lead.count(),
      this.prisma.lead.count({
        where: { createdAt: { gte: todayStart } },
      }),
      this.prisma.lead.count({
        where: { createdAt: { gte: weekAgo } },
      }),
      this.prisma.beatMyPriceRequest.count(),
      this.prisma.deal.count({ where: { isActive: true } }),
      this.prisma.lead.groupBy({
        by: ['status'],
        _count: true,
      }),
      this.prisma.lead.groupBy({
        by: ['source'],
        _count: true,
      }),
      this.getLeadsPerDay(30),
      this.prisma.lead.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: { agent: { select: { name: true } } },
      }),
    ]);

    return {
      totalLeads,
      leadsToday,
      leadsThisWeek,
      totalBeatMyPrice,
      activeDeals,
      leadsByStatus: leadsByStatus.map((s) => ({
        status: s.status,
        count: s._count,
      })),
      leadsBySource: leadsBySource.map((s) => ({
        source: s.source || 'direct',
        count: s._count,
      })),
      leadsPerDay,
      recentLeads,
    };
  }

  async getAbTestStats(page: string = 'search') {
    // Get test start date from settings
    const startedAtKey = `${page}_ab_started_at`;
    const startedAtSetting = await this.prisma.siteSetting.findUnique({ where: { key: startedAtKey } });
    const testStartedAt = startedAtSetting ? new Date(startedAtSetting.value) : null;

    // Use test start date or fall back to 30 days ago
    const sinceDate = testStartedAt ?? new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    // Filter leads by page context + test start date
    const leadPageFilter =
      page === 'homepage'
        ? { formLocation: { startsWith: 'homepage' } }
        : { OR: [{ formLocation: null }, { NOT: { formLocation: { startsWith: 'homepage' } } }] };
    const leadWhere = { ...leadPageFilter, createdAt: { gte: sinceDate } };

    const [leadsByVariant, leadsRaw, leadsByVariantStatus, viewsTotal, viewsRaw] = await Promise.all([
      this.prisma.lead.groupBy({
        by: ['abVariant'],
        where: leadWhere,
        _count: true,
      }),
      this.prisma.lead.findMany({
        where: leadWhere,
        select: { createdAt: true, abVariant: true },
        orderBy: { createdAt: 'asc' },
      }),
      this.prisma.lead.groupBy({
        by: ['abVariant', 'status'],
        where: leadWhere,
        _count: true,
      }),
      this.prisma.abVariantView.groupBy({
        by: ['variant'],
        where: { page, createdAt: { gte: sinceDate } },
        _count: true,
      }),
      this.prisma.abVariantView.groupBy({
        by: ['variant', 'date'],
        where: { date: { gte: sinceDate }, page },
        _count: true,
      }),
    ]);

    // Build per-day breakdown (leads + views) from test start date
    const dayCounts: Record<string, { variantA: number; variantB: number; viewsA: number; viewsB: number }> =
      {};
    const dayCount = Math.min(Math.ceil((Date.now() - sinceDate.getTime()) / (24 * 60 * 60 * 1000)) + 1, 90);
    for (let i = 0; i < dayCount; i++) {
      const d = new Date();
      d.setDate(d.getDate() - (dayCount - 1 - i));
      dayCounts[d.toISOString().slice(0, 10)] = { variantA: 0, variantB: 0, viewsA: 0, viewsB: 0 };
    }
    for (const lead of leadsRaw) {
      const key = lead.createdAt.toISOString().slice(0, 10);
      if (key in dayCounts) {
        if (lead.abVariant === 'A') dayCounts[key].variantA++;
        else if (lead.abVariant === 'B') dayCounts[key].variantB++;
      }
    }
    for (const view of viewsRaw) {
      const key = view.date.toISOString().slice(0, 10);
      if (key in dayCounts) {
        if (view.variant === 'A') dayCounts[key].viewsA += view._count;
        else if (view.variant === 'B') dayCounts[key].viewsB += view._count;
      }
    }

    // Total views by variant (each row = unique visitor per day)
    const viewsA = viewsTotal.find((v) => v.variant === 'A')?._count ?? 0;
    const viewsB = viewsTotal.find((v) => v.variant === 'B')?._count ?? 0;
    const leadsA = leadsByVariant.find((v) => v.abVariant === 'A')?._count ?? 0;
    const leadsB = leadsByVariant.find((v) => v.abVariant === 'B')?._count ?? 0;

    return {
      totalByVariant: leadsByVariant.map((v) => ({
        variant: v.abVariant || 'unknown',
        count: v._count,
      })),
      viewsByVariant: [
        { variant: 'A', count: viewsA },
        { variant: 'B', count: viewsB },
      ],
      conversionA: viewsA > 0 ? Math.round((leadsA / viewsA) * 10000) / 100 : 0,
      conversionB: viewsB > 0 ? Math.round((leadsB / viewsB) * 10000) / 100 : 0,
      perDay: Object.entries(dayCounts).map(([date, counts]) => ({
        date,
        ...counts,
      })),
      byVariantStatus: leadsByVariantStatus.map((v) => ({
        variant: v.abVariant || 'unknown',
        status: v.status,
        count: v._count,
      })),
    };
  }

  async resetAbViews(page?: string) {
    await this.prisma.abVariantView.deleteMany(
      page ? { where: { page } } : undefined,
    );
    return { ok: true };
  }

  private async getLeadsPerDay(days: number) {
    const since = new Date();
    since.setDate(since.getDate() - days);

    const leads = await this.prisma.lead.findMany({
      where: { createdAt: { gte: since } },
      select: { createdAt: true },
      orderBy: { createdAt: 'asc' },
    });

    const counts: Record<string, number> = {};
    for (let i = 0; i < days; i++) {
      const d = new Date();
      d.setDate(d.getDate() - (days - 1 - i));
      counts[d.toISOString().slice(0, 10)] = 0;
    }

    for (const lead of leads) {
      const key = lead.createdAt.toISOString().slice(0, 10);
      if (key in counts) counts[key]++;
    }

    return Object.entries(counts).map(([date, count]) => ({ date, count }));
  }
}
