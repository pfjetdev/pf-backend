"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AnalyticsController", {
    enumerable: true,
    get: function() {
        return AnalyticsController;
    }
});
const _common = require("@nestjs/common");
const _analyticsservice = require("./analytics.service");
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
const VALID_PAGES = [
    'search',
    'homepage'
];
let AnalyticsController = class AnalyticsController {
    async trackVariantView(variant, page, visitorId) {
        if (variant !== 'A' && variant !== 'B') {
            return {
                ok: false
            };
        }
        if (!visitorId || typeof visitorId !== 'string' || visitorId.length > 200) {
            return {
                ok: false
            };
        }
        const safePage = page && VALID_PAGES.includes(page) ? page : 'search';
        await this.analyticsService.trackVariantView(variant, safePage, visitorId);
        return {
            ok: true
        };
    }
    constructor(analyticsService){
        this.analyticsService = analyticsService;
    }
};
_ts_decorate([
    (0, _common.Post)('variant-view'),
    _ts_param(0, (0, _common.Body)('variant')),
    _ts_param(1, (0, _common.Body)('page')),
    _ts_param(2, (0, _common.Body)('visitorId')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], AnalyticsController.prototype, "trackVariantView", null);
AnalyticsController = _ts_decorate([
    (0, _common.Controller)('analytics'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _analyticsservice.AnalyticsService === "undefined" ? Object : _analyticsservice.AnalyticsService
    ])
], AnalyticsController);

//# sourceMappingURL=analytics.controller.js.map