"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BeatMyPriceController", {
    enumerable: true,
    get: function() {
        return BeatMyPriceController;
    }
});
const _common = require("@nestjs/common");
const _express = require("express");
const _beatmypriceservice = require("./beat-my-price.service");
const _createbeatmypricedto = require("./dto/create-beat-my-price.dto");
const _updatebeatmypricedto = require("./dto/update-beat-my-price.dto");
const _jwtauthguard = require("../auth/jwt-auth.guard");
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
let BeatMyPriceController = class BeatMyPriceController {
    // Public — used by frontend form
    create(dto) {
        return this.beatMyPriceService.create(dto);
    }
    // ── Static routes BEFORE :id ──
    async exportCsv(status, search, sortBy, sortOrder, dateFrom, dateTo, agentId, res) {
        const csv = await this.beatMyPriceService.exportCsv({
            status,
            search,
            sortBy,
            sortOrder,
            dateFrom,
            dateTo,
            agentId
        });
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', 'attachment; filename=beat-my-price.csv');
        res.send(csv);
    }
    getStats() {
        return this.beatMyPriceService.getStats();
    }
    bulkUpdateStatus(dto) {
        return this.beatMyPriceService.bulkUpdateStatus(dto.ids, dto.status);
    }
    bulkAssignAgent(dto) {
        return this.beatMyPriceService.bulkAssignAgent(dto.ids, dto.agentId);
    }
    bulkDelete(dto) {
        return this.beatMyPriceService.bulkDelete(dto.ids);
    }
    // ── Paginated list ──
    findAll(page, limit, status, search, sortBy, sortOrder, dateFrom, dateTo, agentId) {
        return this.beatMyPriceService.findAll({
            page: page ? parseInt(page, 10) : undefined,
            limit: limit ? parseInt(limit, 10) : undefined,
            status,
            search,
            sortBy,
            sortOrder,
            dateFrom,
            dateTo,
            agentId
        });
    }
    // ── Single item CRUD ──
    findOne(id) {
        return this.beatMyPriceService.findOne(id);
    }
    update(id, dto) {
        return this.beatMyPriceService.update(id, dto);
    }
    remove(id) {
        return this.beatMyPriceService.remove(id);
    }
    constructor(beatMyPriceService){
        this.beatMyPriceService = beatMyPriceService;
    }
};
_ts_decorate([
    (0, _common.Post)(),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createbeatmypricedto.CreateBeatMyPriceDto === "undefined" ? Object : _createbeatmypricedto.CreateBeatMyPriceDto
    ]),
    _ts_metadata("design:returntype", void 0)
], BeatMyPriceController.prototype, "create", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Get)('export/csv'),
    _ts_param(0, (0, _common.Query)('status')),
    _ts_param(1, (0, _common.Query)('search')),
    _ts_param(2, (0, _common.Query)('sortBy')),
    _ts_param(3, (0, _common.Query)('sortOrder')),
    _ts_param(4, (0, _common.Query)('dateFrom')),
    _ts_param(5, (0, _common.Query)('dateTo')),
    _ts_param(6, (0, _common.Query)('agentId')),
    _ts_param(7, (0, _common.Res)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String,
        String,
        String,
        String,
        String,
        String,
        typeof _express.Response === "undefined" ? Object : _express.Response
    ]),
    _ts_metadata("design:returntype", Promise)
], BeatMyPriceController.prototype, "exportCsv", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Get)('stats/summary'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], BeatMyPriceController.prototype, "getStats", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Patch)('bulk/status'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", void 0)
], BeatMyPriceController.prototype, "bulkUpdateStatus", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Patch)('bulk/assign'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", void 0)
], BeatMyPriceController.prototype, "bulkAssignAgent", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Post)('bulk/delete'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", void 0)
], BeatMyPriceController.prototype, "bulkDelete", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Get)(),
    _ts_param(0, (0, _common.Query)('page')),
    _ts_param(1, (0, _common.Query)('limit')),
    _ts_param(2, (0, _common.Query)('status')),
    _ts_param(3, (0, _common.Query)('search')),
    _ts_param(4, (0, _common.Query)('sortBy')),
    _ts_param(5, (0, _common.Query)('sortOrder')),
    _ts_param(6, (0, _common.Query)('dateFrom')),
    _ts_param(7, (0, _common.Query)('dateTo')),
    _ts_param(8, (0, _common.Query)('agentId')),
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
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], BeatMyPriceController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Get)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], BeatMyPriceController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Patch)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updatebeatmypricedto.UpdateBeatMyPriceDto === "undefined" ? Object : _updatebeatmypricedto.UpdateBeatMyPriceDto
    ]),
    _ts_metadata("design:returntype", void 0)
], BeatMyPriceController.prototype, "update", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Delete)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], BeatMyPriceController.prototype, "remove", null);
BeatMyPriceController = _ts_decorate([
    (0, _common.Controller)('beat-my-price'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _beatmypriceservice.BeatMyPriceService === "undefined" ? Object : _beatmypriceservice.BeatMyPriceService
    ])
], BeatMyPriceController);

//# sourceMappingURL=beat-my-price.controller.js.map