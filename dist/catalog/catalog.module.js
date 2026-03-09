"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CatalogModule", {
    enumerable: true,
    get: function() {
        return CatalogModule;
    }
});
const _common = require("@nestjs/common");
const _catalogcontroller = require("./catalog.controller");
const _catalogservice = require("./catalog.service");
const _destinationsmodule = require("../destinations/destinations.module");
const _dealsmodule = require("../deals/deals.module");
const _airlinesmodule = require("../airlines/airlines.module");
const _settingsmodule = require("../settings/settings.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let CatalogModule = class CatalogModule {
};
CatalogModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _destinationsmodule.DestinationsModule,
            _dealsmodule.DealsModule,
            _airlinesmodule.AirlinesModule,
            _settingsmodule.SettingsModule
        ],
        controllers: [
            _catalogcontroller.CatalogController
        ],
        providers: [
            _catalogservice.CatalogService
        ]
    })
], CatalogModule);

//# sourceMappingURL=catalog.module.js.map