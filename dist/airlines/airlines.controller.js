"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AirlinesController", {
    enumerable: true,
    get: function() {
        return AirlinesController;
    }
});
const _common = require("@nestjs/common");
const _airlinesservice = require("./airlines.service");
const _jwtauthguard = require("../auth/jwt-auth.guard");
const _rolesguard = require("../auth/roles.guard");
const _rolesdecorator = require("../auth/roles.decorator");
const _createairlinedto = require("./dto/create-airline.dto");
const _updateairlinedto = require("./dto/update-airline.dto");
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
let AirlinesController = class AirlinesController {
    findAll(all) {
        return this.airlinesService.findAll(all === 'true');
    }
    findBySlug(slug) {
        return this.airlinesService.findBySlug(slug);
    }
    findOne(id) {
        return this.airlinesService.findOne(id);
    }
    create(dto) {
        return this.airlinesService.create(dto);
    }
    update(id, dto) {
        return this.airlinesService.update(id, dto);
    }
    remove(id) {
        return this.airlinesService.remove(id);
    }
    constructor(airlinesService){
        this.airlinesService = airlinesService;
    }
};
_ts_decorate([
    (0, _common.Get)(),
    _ts_param(0, (0, _common.Query)('all')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], AirlinesController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)('by-slug/:slug'),
    _ts_param(0, (0, _common.Param)('slug')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], AirlinesController.prototype, "findBySlug", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], AirlinesController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createairlinedto.CreateAirlineDto === "undefined" ? Object : _createairlinedto.CreateAirlineDto
    ]),
    _ts_metadata("design:returntype", void 0)
], AirlinesController.prototype, "create", null);
_ts_decorate([
    (0, _common.Patch)(':id'),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updateairlinedto.UpdateAirlineDto === "undefined" ? Object : _updateairlinedto.UpdateAirlineDto
    ]),
    _ts_metadata("design:returntype", void 0)
], AirlinesController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], AirlinesController.prototype, "remove", null);
AirlinesController = _ts_decorate([
    (0, _common.Controller)('airlines'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _airlinesservice.AirlinesService === "undefined" ? Object : _airlinesservice.AirlinesService
    ])
], AirlinesController);

//# sourceMappingURL=airlines.controller.js.map