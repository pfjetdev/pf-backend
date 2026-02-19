"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TestimonialsService", {
    enumerable: true,
    get: function() {
        return TestimonialsService;
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
let TestimonialsService = class TestimonialsService {
    async findAll(all = false) {
        return this.prisma.testimonial.findMany({
            where: all ? {} : {
                isActive: true
            },
            orderBy: {
                sortOrder: 'asc'
            }
        });
    }
    async findOne(id) {
        const testimonial = await this.prisma.testimonial.findUnique({
            where: {
                id
            }
        });
        if (!testimonial) {
            throw new _common.NotFoundException(`Testimonial with id ${id} not found`);
        }
        return testimonial;
    }
    async create(dto) {
        return this.prisma.testimonial.create({
            data: {
                name: dto.name,
                role: dto.role,
                location: dto.location,
                rating: dto.rating,
                text: dto.text,
                isActive: dto.isActive,
                sortOrder: dto.sortOrder
            }
        });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.testimonial.update({
            where: {
                id
            },
            data: {
                name: dto.name,
                role: dto.role,
                location: dto.location,
                rating: dto.rating,
                text: dto.text,
                isActive: dto.isActive,
                sortOrder: dto.sortOrder
            }
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.testimonial.delete({
            where: {
                id
            }
        });
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
TestimonialsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], TestimonialsService);

//# sourceMappingURL=testimonials.service.js.map