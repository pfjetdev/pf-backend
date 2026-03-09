"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FlightsModule", {
    enumerable: true,
    get: function() {
        return FlightsModule;
    }
});
const _common = require("@nestjs/common");
const _flightscontroller = require("./flights.controller");
const _flightsservice = require("./flights.service");
const _settingsmodule = require("../settings/settings.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let FlightsModule = class FlightsModule {
};
FlightsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _settingsmodule.SettingsModule
        ],
        controllers: [
            _flightscontroller.FlightsController
        ],
        providers: [
            _flightsservice.FlightsService
        ],
        exports: [
            _flightsservice.FlightsService
        ]
    })
], FlightsModule);

//# sourceMappingURL=flights.module.js.map