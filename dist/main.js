"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("dotenv/config");
const _core = require("@nestjs/core");
const _common = require("@nestjs/common");
const _helmet = /*#__PURE__*/ _interop_require_default(require("helmet"));
const _appmodule = require("./app.module");
const _auditinterceptor = require("./common/interceptors/audit.interceptor");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const REQUIRED_ENV = [
    'DATABASE_URL',
    'JWT_SECRET'
];
async function bootstrap() {
    const missing = REQUIRED_ENV.filter((k)=>!process.env[k]);
    if (missing.length) {
        throw new Error(`Missing env vars: ${missing.join(', ')}`);
    }
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    app.use((0, _helmet.default)());
    app.useGlobalPipes(new _common.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    app.useGlobalInterceptors(new _auditinterceptor.AuditInterceptor());
    const isProduction = process.env.NODE_ENV === 'production';
    app.enableCors({
        origin: isProduction ? [
            'https://priorityflyers.com',
            'https://www.priorityflyers.com',
            'https://pfbusiness.vercel.app'
        ] : [
            'http://localhost:3000'
        ],
        methods: [
            'GET',
            'POST',
            'PUT',
            'PATCH',
            'DELETE'
        ],
        credentials: true
    });
    app.enableShutdownHooks();
    const port = process.env.PORT ?? 3001;
    await app.listen(port);
    _common.Logger.log(`API running on :${port}`, 'Bootstrap');
}
bootstrap();

//# sourceMappingURL=main.js.map