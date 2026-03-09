"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("dotenv/config");
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'https://priorityflyers.com',
            'https://www.priorityflyers.com',
            'https://pfbusiness.vercel.app'
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