"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BeatMyPriceService", {
    enumerable: true,
    get: function() {
        return BeatMyPriceService;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../prisma/prisma.service");
const _eventsservice = require("../events/events.service");
const _pagination = require("../common/utils/pagination");
const _csv = require("../common/utils/csv");
const _query = require("../common/utils/query");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const AGENT_SELECT = {
    select: {
        id: true,
        name: true
    }
};
let BeatMyPriceService = class BeatMyPriceService {
    async create(dto) {
        const req = await this.prisma.beatMyPriceRequest.create({
            data: {
                origin: dto.origin,
                destination: dto.destination,
                competitorPrice: dto.competitorPrice,
                competitorUrl: dto.competitorUrl,
                screenshotUrl: dto.screenshotUrl,
                phone: dto.phone,
                email: dto.email
            }
        });
        this.eventsService.emitNewBeatMyPrice({
            id: req.id,
            email: req.email,
            origin: req.origin ?? undefined,
            destination: req.destination ?? undefined,
            competitorPrice: req.competitorPrice ? Number(req.competitorPrice) : undefined,
            createdAt: req.createdAt
        });
        return req;
    }
    buildWhereClause(query) {
        const where = {};
        if (query?.status) where.status = query.status;
        if (query?.search) {
            where.OR = [
                {
                    email: {
                        contains: query.search,
                        mode: 'insensitive'
                    }
                },
                {
                    origin: {
                        contains: query.search,
                        mode: 'insensitive'
                    }
                },
                {
                    destination: {
                        contains: query.search,
                        mode: 'insensitive'
                    }
                },
                {
                    phone: {
                        contains: query.search
                    }
                }
            ];
        }
        const dateRange = (0, _query.buildDateRange)(query?.dateFrom, query?.dateTo);
        if (dateRange) where.createdAt = dateRange;
        if (query?.agentId) {
            where.agentId = query.agentId === 'unassigned' ? null : query.agentId;
        }
        return where;
    }
    async findAll(query) {
        const { page, limit, skip, orderBy } = (0, _pagination.parsePagination)(query);
        const where = this.buildWhereClause(query);
        const [data, total] = await Promise.all([
            this.prisma.beatMyPriceRequest.findMany({
                where,
                orderBy,
                skip,
                take: limit,
                include: {
                    agent: AGENT_SELECT
                }
            }),
            this.prisma.beatMyPriceRequest.count({
                where
            })
        ]);
        return (0, _pagination.paginatedResult)(data, total, page, limit);
    }
    async findOne(id) {
        const item = await this.prisma.beatMyPriceRequest.findUnique({
            where: {
                id
            },
            include: {
                agent: AGENT_SELECT
            }
        });
        if (!item) throw new _common.NotFoundException('Request not found');
        return item;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.beatMyPriceRequest.update({
            where: {
                id
            },
            data: {
                status: dto.status,
                ourPrice: dto.ourPrice,
                agentId: dto.agentId,
                agentNotes: dto.agentNotes
            },
            include: {
                agent: AGENT_SELECT
            }
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.beatMyPriceRequest.delete({
            where: {
                id
            }
        });
    }
    // ── Stats ──
    async getStats() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const [total, newToday, wonCount, lostCount] = await Promise.all([
            this.prisma.beatMyPriceRequest.count(),
            this.prisma.beatMyPriceRequest.count({
                where: {
                    createdAt: {
                        gte: today
                    }
                }
            }),
            this.prisma.beatMyPriceRequest.count({
                where: {
                    status: 'won'
                }
            }),
            this.prisma.beatMyPriceRequest.count({
                where: {
                    status: 'lost'
                }
            })
        ]);
        const decided = wonCount + lostCount;
        return {
            total,
            newToday,
            winRate: decided > 0 ? (wonCount / decided * 100).toFixed(1) : '0'
        };
    }
    // ── CSV Export ──
    async exportCsv(query) {
        const where = this.buildWhereClause(query);
        const { orderBy } = (0, _pagination.parsePagination)(query);
        const items = await this.prisma.beatMyPriceRequest.findMany({
            where,
            orderBy,
            include: {
                agent: AGENT_SELECT
            }
        });
        return (0, _csv.buildCsv)([
            'ID',
            'Email',
            'Phone',
            'Origin',
            'Destination',
            'Competitor Price',
            'Competitor URL',
            'Our Price',
            'Status',
            'Agent',
            'Screenshot',
            'Created At'
        ], items.map((item)=>[
                item.id,
                item.email,
                item.phone || '',
                item.origin || '',
                item.destination || '',
                item.competitorPrice?.toString() || '',
                item.competitorUrl || '',
                item.ourPrice?.toString() || '',
                item.status,
                item.agent?.name || '',
                item.screenshotUrl || '',
                item.createdAt.toISOString()
            ]));
    }
    // ── Bulk Operations ──
    async bulkUpdateStatus(ids, status) {
        return this.prisma.beatMyPriceRequest.updateMany({
            where: {
                id: {
                    in: ids
                }
            },
            data: {
                status
            }
        });
    }
    async bulkAssignAgent(ids, agentId) {
        return this.prisma.beatMyPriceRequest.updateMany({
            where: {
                id: {
                    in: ids
                }
            },
            data: {
                agentId
            }
        });
    }
    async bulkDelete(ids) {
        return this.prisma.beatMyPriceRequest.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
    }
    constructor(prisma, eventsService){
        this.prisma = prisma;
        this.eventsService = eventsService;
    }
};
BeatMyPriceService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService,
        typeof _eventsservice.EventsService === "undefined" ? Object : _eventsservice.EventsService
    ])
], BeatMyPriceService);

//# sourceMappingURL=beat-my-price.service.js.map