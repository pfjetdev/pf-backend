"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AgentsService", {
    enumerable: true,
    get: function() {
        return AgentsService;
    }
});
const _common = require("@nestjs/common");
const _bcryptjs = /*#__PURE__*/ _interop_require_wildcard(require("bcryptjs"));
const _prismaservice = require("../prisma/prisma.service");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const SELECT_FIELDS = {
    id: true,
    name: true,
    email: true,
    phone: true,
    avatarUrl: true,
    role: true,
    isActive: true,
    createdAt: true
};
let AgentsService = class AgentsService {
    async findAll() {
        return this.prisma.agent.findMany({
            select: SELECT_FIELDS,
            orderBy: {
                name: 'asc'
            }
        });
    }
    async findPublic() {
        return this.prisma.agent.findMany({
            where: {
                isActive: true
            },
            select: {
                id: true,
                name: true,
                avatarUrl: true
            },
            orderBy: {
                name: 'asc'
            }
        });
    }
    async findOne(id) {
        const agent = await this.prisma.agent.findUnique({
            where: {
                id
            },
            select: SELECT_FIELDS
        });
        if (!agent) throw new _common.NotFoundException('Agent not found');
        return agent;
    }
    async create(dto) {
        return this.prisma.agent.create({
            data: {
                name: dto.name,
                email: dto.email,
                phone: dto.phone || null,
                avatarUrl: dto.avatarUrl || null,
                role: dto.role || 'agent',
                isActive: dto.isActive ?? true,
                passwordHash: dto.password ? await _bcryptjs.hash(dto.password, 10) : undefined
            },
            select: SELECT_FIELDS
        });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.agent.update({
            where: {
                id
            },
            data: {
                name: dto.name,
                email: dto.email,
                phone: dto.phone !== undefined ? dto.phone || null : undefined,
                avatarUrl: dto.avatarUrl !== undefined ? dto.avatarUrl || null : undefined,
                role: dto.role,
                isActive: dto.isActive,
                passwordHash: dto.password ? await _bcryptjs.hash(dto.password, 10) : undefined
            },
            select: SELECT_FIELDS
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.agent.delete({
            where: {
                id
            }
        });
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
AgentsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], AgentsService);

//# sourceMappingURL=agents.service.js.map