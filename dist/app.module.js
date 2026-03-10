"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _core = require("@nestjs/core");
const _throttler = require("@nestjs/throttler");
const _originguard = require("./common/guards/origin.guard");
const _healthcontroller = require("./health.controller");
const _prismamodule = require("./prisma/prisma.module");
const _authmodule = require("./auth/auth.module");
const _adminmodule = require("./admin/admin.module");
const _leadsmodule = require("./leads/leads.module");
const _dealsmodule = require("./deals/deals.module");
const _destinationsmodule = require("./destinations/destinations.module");
const _airlinesmodule = require("./airlines/airlines.module");
const _blogmodule = require("./blog/blog.module");
const _testimonialsmodule = require("./testimonials/testimonials.module");
const _beatmypricemodule = require("./beat-my-price/beat-my-price.module");
const _agentsmodule = require("./agents/agents.module");
const _eventsmodule = require("./events/events.module");
const _settingsmodule = require("./settings/settings.module");
const _analyticsmodule = require("./analytics/analytics.module");
const _flightsmodule = require("./flights/flights.module");
const _catalogmodule = require("./catalog/catalog.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _throttler.ThrottlerModule.forRoot([
                {
                    name: 'short',
                    ttl: 1000,
                    limit: 5
                },
                {
                    name: 'medium',
                    ttl: 10000,
                    limit: 30
                },
                {
                    name: 'long',
                    ttl: 60000,
                    limit: 120
                }
            ]),
            _prismamodule.PrismaModule,
            _authmodule.AuthModule,
            _adminmodule.AdminModule,
            _eventsmodule.EventsModule,
            _settingsmodule.SettingsModule,
            _analyticsmodule.AnalyticsModule,
            _flightsmodule.FlightsModule,
            _catalogmodule.CatalogModule,
            _leadsmodule.LeadsModule,
            _dealsmodule.DealsModule,
            _destinationsmodule.DestinationsModule,
            _airlinesmodule.AirlinesModule,
            _blogmodule.BlogModule,
            _testimonialsmodule.TestimonialsModule,
            _beatmypricemodule.BeatMyPriceModule,
            _agentsmodule.AgentsModule
        ],
        controllers: [
            _healthcontroller.HealthController
        ],
        providers: [
            {
                provide: _core.APP_GUARD,
                useClass: _throttler.ThrottlerGuard
            },
            {
                provide: _core.APP_GUARD,
                useClass: _originguard.OriginGuard
            }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map