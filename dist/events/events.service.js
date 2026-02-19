"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EventsService", {
    enumerable: true,
    get: function() {
        return EventsService;
    }
});
const _common = require("@nestjs/common");
const _rxjs = require("rxjs");
const _operators = require("rxjs/operators");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let EventsService = class EventsService {
    get leadEvents$() {
        return this.leadSubject.asObservable();
    }
    get beatMyPriceEvents$() {
        return this.beatMyPriceSubject.asObservable();
    }
    /** Merged stream — both event types with `type` discriminator */ get adminEvents$() {
        return (0, _rxjs.merge)(this.leadSubject.pipe((0, _operators.map)((data)=>({
                type: 'new-lead',
                data
            }))), this.beatMyPriceSubject.pipe((0, _operators.map)((data)=>({
                type: 'new-beat-my-price',
                data
            }))));
    }
    emitNewLead(lead) {
        this.leadSubject.next(lead);
    }
    emitNewBeatMyPrice(req) {
        this.beatMyPriceSubject.next(req);
    }
    constructor(){
        this.leadSubject = new _rxjs.Subject();
        this.beatMyPriceSubject = new _rxjs.Subject();
    }
};
EventsService = _ts_decorate([
    (0, _common.Injectable)()
], EventsService);

//# sourceMappingURL=events.service.js.map