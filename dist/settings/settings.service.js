"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SettingsService", {
    enumerable: true,
    get: function() {
        return SettingsService;
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
let SettingsService = class SettingsService {
    async getAll() {
        const rows = await this.prisma.siteSetting.findMany();
        const result = {};
        for (const row of rows){
            result[row.key] = row.value;
        }
        return result;
    }
    async get(key) {
        const row = await this.prisma.siteSetting.findUnique({
            where: {
                key
            }
        });
        return row?.value ?? null;
    }
    async set(key, value) {
        const row = await this.prisma.siteSetting.upsert({
            where: {
                key
            },
            update: {
                value
            },
            create: {
                key,
                value
            }
        });
        return {
            key: row.key,
            value: row.value
        };
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
SettingsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], SettingsService);

//# sourceMappingURL=settings.service.js.map