"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuditInterceptor", {
    enumerable: true,
    get: function() {
        return AuditInterceptor;
    }
});
const _common = require("@nestjs/common");
const _rxjs = require("rxjs");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
const AUDIT_METHODS = new Set([
    'POST',
    'PATCH',
    'PUT',
    'DELETE'
]);
const AUDIT_PATHS = [
    '/auth/login',
    '/auth/setup',
    '/auth/change-password',
    '/leads/export/csv',
    '/leads/bulk/',
    '/beat-my-price/export/csv',
    '/beat-my-price/bulk/',
    '/settings/',
    '/agents',
    '/deals'
];
let AuditInterceptor = class AuditInterceptor {
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        const method = req.method;
        if (!AUDIT_METHODS.has(method)) {
            return next.handle();
        }
        const path = req.url?.split('?')[0] || '';
        const shouldAudit = AUDIT_PATHS.some((p)=>path.includes(p));
        if (!shouldAudit) {
            return next.handle();
        }
        const userId = req.user?.id || 'anonymous';
        const userEmail = req.user?.email || '';
        const start = Date.now();
        return next.handle().pipe((0, _rxjs.tap)({
            next: ()=>{
                this.logger.log(`${method} ${path} | user=${userId} (${userEmail}) | ${Date.now() - start}ms | OK`);
            },
            error: (err)=>{
                this.logger.warn(`${method} ${path} | user=${userId} (${userEmail}) | ${Date.now() - start}ms | ERROR: ${err.message}`);
            }
        }));
    }
    constructor(){
        this.logger = new _common.Logger('Audit');
    }
};
AuditInterceptor = _ts_decorate([
    (0, _common.Injectable)()
], AuditInterceptor);

//# sourceMappingURL=audit.interceptor.js.map