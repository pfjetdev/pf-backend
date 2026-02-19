"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LeadsService", {
    enumerable: true,
    get: function() {
        return LeadsService;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../prisma/prisma.service");
const _eventsservice = require("../events/events.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let LeadsService = class LeadsService {
    async create(dto) {
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
                utmCampaign: dto.utmCampaign
            }
        });
        this.eventsService.emitNewLead({
            id: lead.id,
            name: lead.name,
            phone: lead.phone,
            origin: lead.origin ?? undefined,
            destination: lead.destination ?? undefined,
            cabinClass: lead.cabinClass ?? undefined,
            source: lead.source ?? undefined,
            createdAt: lead.createdAt
        });
        return lead;
    }
    buildWhereClause(query) {
        const where = {};
        if (query?.status) where.status = query.status;
        if (query?.source) where.source = {
            contains: query.source
        };
        if (query?.search) {
            where.OR = [
                {
                    name: {
                        contains: query.search,
                        mode: 'insensitive'
                    }
                },
                {
                    email: {
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
        if (query?.dateFrom || query?.dateTo) {
            const createdAt = {};
            if (query?.dateFrom) createdAt.gte = new Date(query.dateFrom);
            if (query?.dateTo) {
                const end = new Date(query.dateTo);
                end.setDate(end.getDate() + 1);
                createdAt.lte = end;
            }
            where.createdAt = createdAt;
        }
        if (query?.cabinClass) where.cabinClass = query.cabinClass;
        if (query?.agentId) {
            where.agentId = query.agentId === 'unassigned' ? null : query.agentId;
        }
        return where;
    }
    async findAll(query) {
        const page = query?.page || 1;
        const limit = query?.limit || 25;
        const skip = (page - 1) * limit;
        const where = this.buildWhereClause(query);
        const orderBy = {};
        const sortBy = query?.sortBy || 'createdAt';
        orderBy[sortBy] = query?.sortOrder || 'desc';
        const [data, total] = await Promise.all([
            this.prisma.lead.findMany({
                where,
                orderBy,
                skip,
                take: limit,
                include: {
                    agent: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }),
            this.prisma.lead.count({
                where
            })
        ]);
        return {
            data,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        };
    }
    async findOne(id) {
        const lead = await this.prisma.lead.findUnique({
            where: {
                id
            },
            include: {
                agent: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        });
        if (!lead) throw new _common.NotFoundException('Lead not found');
        return lead;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.lead.update({
            where: {
                id
            },
            data: {
                status: dto.status,
                agentId: dto.agentId,
                agentNotes: dto.agentNotes,
                quotedPrice: dto.quotedPrice
            },
            include: {
                agent: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.lead.delete({
            where: {
                id
            }
        });
    }
    // ── Stats ──
    async getStats() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const [total, newToday, bookedCount] = await Promise.all([
            this.prisma.lead.count(),
            this.prisma.lead.count({
                where: {
                    createdAt: {
                        gte: today
                    }
                }
            }),
            this.prisma.lead.count({
                where: {
                    status: 'booked'
                }
            })
        ]);
        return {
            total,
            newToday,
            conversionRate: total > 0 ? (bookedCount / total * 100).toFixed(1) : '0'
        };
    }
    // ── CSV Export ──
    async exportCsv(query) {
        const where = this.buildWhereClause(query);
        const orderBy = {};
        orderBy[query?.sortBy || 'createdAt'] = query?.sortOrder || 'desc';
        const leads = await this.prisma.lead.findMany({
            where,
            orderBy,
            include: {
                agent: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
        const headers = [
            'ID',
            'Name',
            'Email',
            'Phone',
            'Origin',
            'Destination',
            'Cabin Class',
            'Status',
            'Agent',
            'Quoted Price',
            'Source',
            'A/B Variant',
            'Created At'
        ];
        const escape = (val)=>val.includes(',') || val.includes('"') || val.includes('\n') ? `"${val.replace(/"/g, '""')}"` : val;
        const rows = leads.map((lead)=>[
                lead.id,
                lead.name,
                lead.email || '',
                lead.phone,
                lead.origin || '',
                lead.destination || '',
                lead.cabinClass || '',
                lead.status,
                lead.agent?.name || '',
                lead.quotedPrice?.toString() || '',
                lead.source || '',
                lead.abVariant || '',
                lead.createdAt.toISOString()
            ].map(escape).join(','));
        return [
            headers.join(','),
            ...rows
        ].join('\n');
    }
    // ── Bulk Operations ──
    async bulkUpdateStatus(ids, status) {
        return this.prisma.lead.updateMany({
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
        return this.prisma.lead.updateMany({
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
        return this.prisma.lead.deleteMany({
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
LeadsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService,
        typeof _eventsservice.EventsService === "undefined" ? Object : _eventsservice.EventsService
    ])
], LeadsService);

//# sourceMappingURL=leads.service.js.map