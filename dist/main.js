"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("dotenv/config");
const _core = require("@nestjs/core");
const _common = require("@nestjs/common");
const _appmodule = require("./app.module");
const _auditinterceptor = require("./common/interceptors/audit.interceptor");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
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
    const port = process.env.PORT ?? 3001;
    await app.listen(port);
    console.log(`🚀 API running on http://localhost:${port}`);
}
bootstrap();

//# sourceMappingURL=main.js.map