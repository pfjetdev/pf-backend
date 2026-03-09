"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CatalogController", {
    enumerable: true,
    get: function() {
        return CatalogController;
    }
});
const _common = require("@nestjs/common");
const _catalogservice = require("./catalog.service");
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
let CatalogController = class CatalogController {
    async getHome() {
        return this.catalog.getHomePage();
    }
    async getRegions() {
        return this.catalog.getRegions();
    }
    async getRegion(region) {
        return this.catalog.getRegion(region);
    }
    async getCountry(region, country) {
        return this.catalog.getCountry(region, country);
    }
    async getFeaturedDeals() {
        return this.catalog.getFeaturedDeals();
    }
    async getDeal(slug) {
        return this.catalog.getDealPage(slug);
    }
    async getAirlinesHome() {
        return this.catalog.getAirlinesHome();
    }
    async getAirlinePage(slug) {
        return this.catalog.getAirlinePage(slug);
    }
    constructor(catalog){
        this.catalog = catalog;
    }
};
_ts_decorate([
    (0, _common.Get)('home'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], CatalogController.prototype, "getHome", null);
_ts_decorate([
    (0, _common.Get)('regions'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], CatalogController.prototype, "getRegions", null);
_ts_decorate([
    (0, _common.Get)('regions/:region'),
    _ts_param(0, (0, _common.Param)('region')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CatalogController.prototype, "getRegion", null);
_ts_decorate([
    (0, _common.Get)('regions/:region/:country'),
    _ts_param(0, (0, _common.Param)('region')),
    _ts_param(1, (0, _common.Param)('country')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CatalogController.prototype, "getCountry", null);
_ts_decorate([
    (0, _common.Get)('deals/featured'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], CatalogController.prototype, "getFeaturedDeals", null);
_ts_decorate([
    (0, _common.Get)('deals/:slug'),
    _ts_param(0, (0, _common.Param)('slug')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CatalogController.prototype, "getDeal", null);
_ts_decorate([
    (0, _common.Get)('airlines'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], CatalogController.prototype, "getAirlinesHome", null);
_ts_decorate([
    (0, _common.Get)('airlines/:slug'),
    _ts_param(0, (0, _common.Param)('slug')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CatalogController.prototype, "getAirlinePage", null);
CatalogController = _ts_decorate([
    (0, _common.Controller)('catalog'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _catalogservice.CatalogService === "undefined" ? Object : _catalogservice.CatalogService
    ])
], CatalogController);

//# sourceMappingURL=catalog.controller.js.map