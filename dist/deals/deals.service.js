"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DealsService", {
    enumerable: true,
    get: function() {
        return DealsService;
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
let DealsService = class DealsService {
    async findAll(all = false) {
        return this.prisma.deal.findMany({
            where: all ? {} : {
                isActive: true
            },
            orderBy: {
                sortOrder: 'asc'
            }
        });
    }
    async findBySlug(slug) {
        const deal = await this.prisma.deal.findUnique({
            where: {
                slug
            }
        });
        if (!deal) {
            throw new _common.NotFoundException(`Deal with slug "${slug}" not found`);
        }
        return deal;
    }
    async findOne(id) {
        const deal = await this.prisma.deal.findUnique({
            where: {
                id
            }
        });
        if (!deal) {
            throw new _common.NotFoundException(`Deal with id ${id} not found`);
        }
        return deal;
    }
    async create(dto) {
        return this.prisma.deal.create({
            data: {
                slug: dto.slug,
                origin: dto.origin,
                originCode: dto.originCode,
                destination: dto.destination,
                destinationCode: dto.destinationCode,
                countryCode: dto.countryCode,
                cabinClass: dto.cabinClass,
                publicFare: dto.publicFare,
                pfPrice: dto.pfPrice,
                imageUrl: dto.imageUrl,
                themeColor: dto.themeColor,
                isActive: dto.isActive,
                sortOrder: dto.sortOrder,
                startsAt: dto.startsAt ? new Date(dto.startsAt) : undefined,
                expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : undefined
            }
        });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.deal.update({
            where: {
                id
            },
            data: {
                slug: dto.slug,
                origin: dto.origin,
                originCode: dto.originCode,
                destination: dto.destination,
                destinationCode: dto.destinationCode,
                countryCode: dto.countryCode,
                cabinClass: dto.cabinClass,
                publicFare: dto.publicFare,
                pfPrice: dto.pfPrice,
                imageUrl: dto.imageUrl,
                themeColor: dto.themeColor,
                isActive: dto.isActive,
                sortOrder: dto.sortOrder,
                startsAt: dto.startsAt ? new Date(dto.startsAt) : undefined,
                expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : undefined
            }
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.deal.delete({
            where: {
                id
            }
        });
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
DealsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], DealsService);

//# sourceMappingURL=deals.service.js.map