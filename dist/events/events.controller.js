"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EventsController", {
    enumerable: true,
    get: function() {
        return EventsController;
    }
});
const _common = require("@nestjs/common");
const _rxjs = require("rxjs");
const _jwt = require("@nestjs/jwt");
const _eventsservice = require("./events.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let EventsController = class EventsController {
    verifyToken(token) {
        if (!token) throw new _common.UnauthorizedException('Token required');
        try {
            this.jwtService.verify(token);
        } catch  {
            throw new _common.UnauthorizedException('Invalid token');
        }
    }
    /** Unified admin stream — emits new-lead and new-beat-my-price events */ adminStream(token) {
        this.verifyToken(token);
        return this.eventsService.adminEvents$.pipe((0, _rxjs.map)((event)=>({
                data: JSON.stringify(event.data),
                type: event.type
            })));
    }
    constructor(eventsService, jwtService){
        this.eventsService = eventsService;
        this.jwtService = jwtService;
    }
};
_ts_decorate([
    (0, _common.Sse)('leads'),
    _ts_param(0, (0, _common.Query)('token')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", typeof _rxjs.Observable === "undefined" ? Object : _rxjs.Observable)
], EventsController.prototype, "adminStream", null);
EventsController = _ts_decorate([
    (0, _common.Controller)('events'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _eventsservice.EventsService === "undefined" ? Object : _eventsservice.EventsService,
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService
    ])
], EventsController);

//# sourceMappingURL=events.controller.js.map