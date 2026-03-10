"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FlightsController", {
    enumerable: true,
    get: function() {
        return FlightsController;
    }
});
const _common = require("@nestjs/common");
const _flightsservice = require("./flights.service");
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
let FlightsController = class FlightsController {
    /** Public: generate flights for a search query */ async search(from, to, depart, returnDate, cabin, adults, children, infants, pets, type, // Multi-city legs as JSON string: [{"from":"NYC","to":"LON","depart":"2026-04-06"}, ...]
    legsJson) {
        if (!from || !to || !depart) {
            return {
                flights: []
            };
        }
        let legs;
        if (legsJson) {
            try {
                legs = JSON.parse(legsJson);
            } catch  {
                legs = undefined;
            }
        }
        const params = {
            from: from.toUpperCase(),
            to: to.toUpperCase(),
            depart,
            return: returnDate || undefined,
            cabin: [
                'economy',
                'premium',
                'business',
                'first'
            ].includes(cabin || '') ? cabin : 'business',
            adults: parseInt(adults || '1', 10) || 1,
            children: parseInt(children || '0', 10) || 0,
            infants: parseInt(infants || '0', 10) || 0,
            pets: parseInt(pets || '0', 10) || 0,
            type: [
                'round',
                'oneway',
                'multi'
            ].includes(type || '') ? type : returnDate ? 'round' : 'oneway',
            legs
        };
        return this.flights.search(params);
    }
    /** Public: reconstruct a flight from a lead source string */ async reconstruct(source) {
        const result = await this.flights.reconstructFromSource(source);
        if (!result) {
            throw new _common.NotFoundException('Flight not found for this source');
        }
        return result;
    }
    constructor(flights){
        this.flights = flights;
    }
};
_ts_decorate([
    (0, _common.Get)('search'),
    _ts_param(0, (0, _common.Query)('from')),
    _ts_param(1, (0, _common.Query)('to')),
    _ts_param(2, (0, _common.Query)('depart')),
    _ts_param(3, (0, _common.Query)('return')),
    _ts_param(4, (0, _common.Query)('cabin')),
    _ts_param(5, (0, _common.Query)('adults')),
    _ts_param(6, (0, _common.Query)('children')),
    _ts_param(7, (0, _common.Query)('infants')),
    _ts_param(8, (0, _common.Query)('pets')),
    _ts_param(9, (0, _common.Query)('type')),
    _ts_param(10, (0, _common.Query)('legs')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String,
        String,
        String,
        String,
        String,
        String,
        String,
        String,
        String,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], FlightsController.prototype, "search", null);
_ts_decorate([
    (0, _common.Get)('reconstruct/:source'),
    _ts_param(0, (0, _common.Param)('source')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], FlightsController.prototype, "reconstruct", null);
FlightsController = _ts_decorate([
    (0, _common.Controller)('flights'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _flightsservice.FlightsService === "undefined" ? Object : _flightsservice.FlightsService
    ])
], FlightsController);

//# sourceMappingURL=flights.controller.js.map