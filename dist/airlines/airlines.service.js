"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AirlinesService", {
    enumerable: true,
    get: function() {
        return AirlinesService;
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
let AirlinesService = class AirlinesService {
    /** Normalize routeCodes: accept string "DXB,AUH" or string[] */ normalizeRouteCodes(codes) {
        if (codes === undefined) return undefined;
        if (typeof codes === 'string') {
            return codes.split(',').map((c)=>c.trim()).filter(Boolean);
        }
        return codes;
    }
    async findAll(all = false) {
        return this.prisma.airline.findMany({
            where: all ? {} : {
                isActive: true
            },
            orderBy: {
                sortOrder: 'asc'
            }
        });
    }
    async findOne(id) {
        const airline = await this.prisma.airline.findUnique({
            where: {
                id
            }
        });
        if (!airline) {
            throw new _common.NotFoundException(`Airline with id ${id} not found`);
        }
        return airline;
    }
    async findBySlug(slug) {
        const airline = await this.prisma.airline.findUnique({
            where: {
                slug
            }
        });
        if (!airline) {
            throw new _common.NotFoundException(`Airline with slug "${slug}" not found`);
        }
        return airline;
    }
    async create(dto) {
        return this.prisma.airline.create({
            data: {
                name: dto.name,
                slug: dto.slug ?? dto.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
                logoUrl: dto.logoUrl,
                imageUrl: dto.imageUrl,
                featuredRoute: dto.featuredRoute,
                savingPercent: dto.savingPercent,
                iataCode: dto.iataCode,
                description: dto.description,
                alliance: dto.alliance,
                hubCity: dto.hubCity,
                routeCodes: this.normalizeRouteCodes(dto.routeCodes) ?? [],
                isActive: dto.isActive,
                sortOrder: dto.sortOrder
            }
        });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.airline.update({
            where: {
                id
            },
            data: {
                name: dto.name,
                slug: dto.slug,
                logoUrl: dto.logoUrl,
                imageUrl: dto.imageUrl,
                featuredRoute: dto.featuredRoute,
                savingPercent: dto.savingPercent,
                iataCode: dto.iataCode,
                description: dto.description,
                alliance: dto.alliance,
                hubCity: dto.hubCity,
                routeCodes: this.normalizeRouteCodes(dto.routeCodes),
                isActive: dto.isActive,
                sortOrder: dto.sortOrder
            }
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.airline.delete({
            where: {
                id
            }
        });
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
AirlinesService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], AirlinesService);

//# sourceMappingURL=airlines.service.js.map