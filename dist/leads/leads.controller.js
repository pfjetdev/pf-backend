"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LeadsController", {
    enumerable: true,
    get: function() {
        return LeadsController;
    }
});
const _common = require("@nestjs/common");
const _express = require("express");
const _leadsservice = require("./leads.service");
const _createleaddto = require("./dto/create-lead.dto");
const _updateleaddto = require("./dto/update-lead.dto");
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
let LeadsController = class LeadsController {
    // Public — used by frontend forms
    create(dto) {
        return this.leadsService.create(dto);
    }
    // ── Static routes BEFORE :id ──
    async exportCsv(status, source, search, sortBy, sortOrder, dateFrom, dateTo, cabinClass, agentId, res) {
        const csv = await this.leadsService.exportCsv({
            status,
            source,
            search,
            sortBy,
            sortOrder,
            dateFrom,
            dateTo,
            cabinClass,
            agentId
        });
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', 'attachment; filename=leads.csv');
        res.send(csv);
    }
    getStats() {
        return this.leadsService.getStats();
    }
    bulkUpdateStatus(dto) {
        return this.leadsService.bulkUpdateStatus(dto.ids, dto.status);
    }
    bulkAssignAgent(dto) {
        return this.leadsService.bulkAssignAgent(dto.ids, dto.agentId);
    }
    bulkDelete(dto) {
        return this.leadsService.bulkDelete(dto.ids);
    }
    // ── Paginated list ──
    findAll(page, limit, status, source, search, sortBy, sortOrder, dateFrom, dateTo, cabinClass, agentId) {
        return this.leadsService.findAll({
            page: page ? parseInt(page, 10) : undefined,
            limit: limit ? parseInt(limit, 10) : undefined,
            status,
            source,
            search,
            sortBy,
            sortOrder,
            dateFrom,
            dateTo,
            cabinClass,
            agentId
        });
    }
    // ── Single lead CRUD ──
    findOne(id) {
        return this.leadsService.findOne(id);
    }
    update(id, dto) {
        return this.leadsService.update(id, dto);
    }
    remove(id) {
        return this.leadsService.remove(id);
    }
    constructor(leadsService){
        this.leadsService = leadsService;
    }
};
_ts_decorate([
    (0, _common.Post)(),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createleaddto.CreateLeadDto === "undefined" ? Object : _createleaddto.CreateLeadDto
    ]),
    _ts_metadata("design:returntype", void 0)
], LeadsController.prototype, "create", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Get)('export/csv'),
    _ts_param(0, (0, _common.Query)('status')),
    _ts_param(1, (0, _common.Query)('source')),
    _ts_param(2, (0, _common.Query)('search')),
    _ts_param(3, (0, _common.Query)('sortBy')),
    _ts_param(4, (0, _common.Query)('sortOrder')),
    _ts_param(5, (0, _common.Query)('dateFrom')),
    _ts_param(6, (0, _common.Query)('dateTo')),
    _ts_param(7, (0, _common.Query)('cabinClass')),
    _ts_param(8, (0, _common.Query)('agentId')),
    _ts_param(9, (0, _common.Res)()),
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
        typeof _express.Response === "undefined" ? Object : _express.Response
    ]),
    _ts_metadata("design:returntype", Promise)
], LeadsController.prototype, "exportCsv", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Get)('stats/summary'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], LeadsController.prototype, "getStats", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Patch)('bulk/status'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", void 0)
], LeadsController.prototype, "bulkUpdateStatus", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Patch)('bulk/assign'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", void 0)
], LeadsController.prototype, "bulkAssignAgent", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Post)('bulk/delete'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", void 0)
], LeadsController.prototype, "bulkDelete", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Get)(),
    _ts_param(0, (0, _common.Query)('page')),
    _ts_param(1, (0, _common.Query)('limit')),
    _ts_param(2, (0, _common.Query)('status')),
    _ts_param(3, (0, _common.Query)('source')),
    _ts_param(4, (0, _common.Query)('search')),
    _ts_param(5, (0, _common.Query)('sortBy')),
    _ts_param(6, (0, _common.Query)('sortOrder')),
    _ts_param(7, (0, _common.Query)('dateFrom')),
    _ts_param(8, (0, _common.Query)('dateTo')),
    _ts_param(9, (0, _common.Query)('cabinClass')),
    _ts_param(10, (0, _common.Query)('agentId')),
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
    _ts_metadata("design:returntype", void 0)
], LeadsController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Get)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], LeadsController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Patch)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updateleaddto.UpdateLeadDto === "undefined" ? Object : _updateleaddto.UpdateLeadDto
    ]),
    _ts_metadata("design:returntype", void 0)
], LeadsController.prototype, "update", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard),
    (0, _common.Delete)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], LeadsController.prototype, "remove", null);
LeadsController = _ts_decorate([
    (0, _common.Controller)('leads'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _leadsservice.LeadsService === "undefined" ? Object : _leadsservice.LeadsService
    ])
], LeadsController);

//# sourceMappingURL=leads.controller.js.map