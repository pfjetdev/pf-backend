"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AdminService", {
    enumerable: true,
    get: function() {
        return AdminService;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../prisma/prisma.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let AdminService = class AdminService {
    async getStats() {
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const [totalLeads, leadsToday, leadsThisWeek, totalBeatMyPrice, activeDeals, leadsByStatus, leadsBySource, leadsPerDay, recentLeads] = await Promise.all([
            this.prisma.lead.count(),
            this.prisma.lead.count({
                where: {
                    createdAt: {
                        gte: todayStart
                    }
                }
            }),
            this.prisma.lead.count({
                where: {
                    createdAt: {
                        gte: weekAgo
                    }
                }
            }),
            this.prisma.beatMyPriceRequest.count(),
            this.prisma.deal.count({
                where: {
                    isActive: true
                }
            }),
            this.prisma.lead.groupBy({
                by: [
                    'status'
                ],
                _count: true
            }),
            this.prisma.lead.groupBy({
                by: [
                    'source'
                ],
                _count: true
            }),
            this.getLeadsPerDay(30),
            this.prisma.lead.findMany({
                take: 10,
                orderBy: {
                    createdAt: 'desc'
                },
                include: {
                    agent: {
                        select: {
                            name: true
                        }
                    }
                }
            })
        ]);
        return {
            totalLeads,
            leadsToday,
            leadsThisWeek,
            totalBeatMyPrice,
            activeDeals,
            leadsByStatus: leadsByStatus.map((s)=>({
                    status: s.status,
                    count: s._count
                })),
            leadsBySource: leadsBySource.map((s)=>({
                    source: s.source || 'direct',
                    count: s._count
                })),
            leadsPerDay,
            recentLeads
        };
    }
    async getAbTestStats(page = 'search') {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        // Filter leads by page context
        const leadWhere = page === 'homepage' ? {
            formLocation: {
                startsWith: 'homepage'
            }
        } : {
            OR: [
                {
                    formLocation: null
                },
                {
                    NOT: {
                        formLocation: {
                            startsWith: 'homepage'
                        }
                    }
                }
            ]
        };
        const [leadsByVariant, leadsRaw, leadsByVariantStatus, viewsTotal, viewsRaw] = await Promise.all([
            this.prisma.lead.groupBy({
                by: [
                    'abVariant'
                ],
                where: leadWhere,
                _count: true
            }),
            this.prisma.lead.findMany({
                where: {
                    createdAt: {
                        gte: thirtyDaysAgo
                    },
                    ...leadWhere
                },
                select: {
                    createdAt: true,
                    abVariant: true
                },
                orderBy: {
                    createdAt: 'asc'
                }
            }),
            this.prisma.lead.groupBy({
                by: [
                    'abVariant',
                    'status'
                ],
                where: leadWhere,
                _count: true
            }),
            this.prisma.abVariantView.groupBy({
                by: [
                    'variant'
                ],
                where: {
                    page
                },
                _sum: {
                    count: true
                }
            }),
            this.prisma.abVariantView.findMany({
                where: {
                    date: {
                        gte: thirtyDaysAgo
                    },
                    page
                },
                orderBy: {
                    date: 'asc'
                }
            })
        ]);
        // Build per-day breakdown (leads + views)
        const dayCounts = {};
        for(let i = 0; i < 30; i++){
            const d = new Date();
            d.setDate(d.getDate() - (29 - i));
            dayCounts[d.toISOString().slice(0, 10)] = {
                variantA: 0,
                variantB: 0,
                viewsA: 0,
                viewsB: 0
            };
        }
        for (const lead of leadsRaw){
            const key = lead.createdAt.toISOString().slice(0, 10);
            if (key in dayCounts) {
                if (lead.abVariant === 'A') dayCounts[key].variantA++;
                else if (lead.abVariant === 'B') dayCounts[key].variantB++;
            }
        }
        for (const view of viewsRaw){
            const key = view.date.toISOString().slice(0, 10);
            if (key in dayCounts) {
                if (view.variant === 'A') dayCounts[key].viewsA += view.count;
                else if (view.variant === 'B') dayCounts[key].viewsB += view.count;
            }
        }
        // Total views by variant
        const viewsA = viewsTotal.find((v)=>v.variant === 'A')?._sum.count ?? 0;
        const viewsB = viewsTotal.find((v)=>v.variant === 'B')?._sum.count ?? 0;
        const leadsA = leadsByVariant.find((v)=>v.abVariant === 'A')?._count ?? 0;
        const leadsB = leadsByVariant.find((v)=>v.abVariant === 'B')?._count ?? 0;
        return {
            totalByVariant: leadsByVariant.map((v)=>({
                    variant: v.abVariant || 'unknown',
                    count: v._count
                })),
            viewsByVariant: [
                {
                    variant: 'A',
                    count: viewsA
                },
                {
                    variant: 'B',
                    count: viewsB
                }
            ],
            conversionA: viewsA > 0 ? Math.round(leadsA / viewsA * 10000) / 100 : 0,
            conversionB: viewsB > 0 ? Math.round(leadsB / viewsB * 10000) / 100 : 0,
            perDay: Object.entries(dayCounts).map(([date, counts])=>({
                    date,
                    ...counts
                })),
            byVariantStatus: leadsByVariantStatus.map((v)=>({
                    variant: v.abVariant || 'unknown',
                    status: v.status,
                    count: v._count
                }))
        };
    }
    async resetAbViews(page) {
        await this.prisma.abVariantView.deleteMany(page ? {
            where: {
                page
            }
        } : undefined);
        return {
            ok: true
        };
    }
    async getLeadsPerDay(days) {
        const since = new Date();
        since.setDate(since.getDate() - days);
        const leads = await this.prisma.lead.findMany({
            where: {
                createdAt: {
                    gte: since
                }
            },
            select: {
                createdAt: true
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        const counts = {};
        for(let i = 0; i < days; i++){
            const d = new Date();
            d.setDate(d.getDate() - (days - 1 - i));
            counts[d.toISOString().slice(0, 10)] = 0;
        }
        for (const lead of leads){
            const key = lead.createdAt.toISOString().slice(0, 10);
            if (key in counts) counts[key]++;
        }
        return Object.entries(counts).map(([date, count])=>({
                date,
                count
            }));
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
AdminService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], AdminService);

//# sourceMappingURL=admin.service.js.map