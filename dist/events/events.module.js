"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EventsModule", {
    enumerable: true,
    get: function() {
        return EventsModule;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _eventscontroller = require("./events.controller");
const _eventsservice = require("./events.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let EventsModule = class EventsModule {
};
EventsModule = _ts_decorate([
    (0, _common.Global)(),
    (0, _common.Module)({
        imports: [
            _jwt.JwtModule.register({
                secret: process.env.JWT_SECRET || 'dev-secret-change-me',
                signOptions: {
                    expiresIn: '7d'
                }
            })
        ],
        controllers: [
            _eventscontroller.EventsController
        ],
        providers: [
            _eventsservice.EventsService
        ],
        exports: [
            _eventsservice.EventsService
        ]
    })
], EventsModule);

//# sourceMappingURL=events.module.js.map