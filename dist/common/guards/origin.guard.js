"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OriginGuard", {
    enumerable: true,
    get: function() {
        return OriginGuard;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
const ALLOWED_ORIGINS = [
    'https://priorityflyers.com',
    'https://www.priorityflyers.com',
    'https://pfbusiness.vercel.app'
];
let OriginGuard = class OriginGuard {
    canActivate(context) {
        if (process.env.NODE_ENV !== 'production') return true;
        const request = context.switchToHttp().getRequest();
        const method = request.method?.toUpperCase();
        // Only check state-changing methods
        if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
            return true;
        }
        const origin = request.headers['origin'];
        if (!origin) {
            // Server-to-server calls (no browser) won't have Origin
            // Allow if no Origin header is present (API-to-API)
            return true;
        }
        if (ALLOWED_ORIGINS.includes(origin)) {
            return true;
        }
        throw new _common.ForbiddenException('Request origin not allowed');
    }
};
OriginGuard = _ts_decorate([
    (0, _common.Injectable)()
], OriginGuard);

//# sourceMappingURL=origin.guard.js.map