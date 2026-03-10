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
const CACHE_TTL_MS = 30_000; // 30 seconds
let SettingsService = class SettingsService {
    async getAll() {
        if (this.cache && Date.now() < this.cacheExpiry) {
            return this.cache;
        }
        const rows = await this.prisma.siteSetting.findMany();
        const result = {};
        for (const row of rows){
            result[row.key] = row.value;
        }
        this.cache = result;
        this.cacheExpiry = Date.now() + CACHE_TTL_MS;
        return result;
    }
    async get(key) {
        const all = await this.getAll();
        return all[key] ?? null;
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
        this.invalidateCache();
        return {
            key: row.key,
            value: row.value
        };
    }
    /** Clear cache so next getAll() re-fetches from DB */ invalidateCache() {
        this.cache = null;
        this.cacheExpiry = 0;
    }
    constructor(prisma){
        this.prisma = prisma;
        this.cache = null;
        this.cacheExpiry = 0;
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