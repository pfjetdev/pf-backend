"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AgentsController", {
    enumerable: true,
    get: function() {
        return AgentsController;
    }
});
const _common = require("@nestjs/common");
const _agentsservice = require("./agents.service");
const _jwtauthguard = require("../auth/jwt-auth.guard");
const _rolesguard = require("../auth/roles.guard");
const _rolesdecorator = require("../auth/roles.decorator");
const _createagentdto = require("./dto/create-agent.dto");
const _updateagentdto = require("./dto/update-agent.dto");
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
let AgentsController = class AgentsController {
    findPublic() {
        return this.agentsService.findPublic();
    }
    findAll() {
        return this.agentsService.findAll();
    }
    findOne(id) {
        return this.agentsService.findOne(id);
    }
    create(dto) {
        return this.agentsService.create(dto);
    }
    update(id, dto) {
        return this.agentsService.update(id, dto);
    }
    remove(id) {
        return this.agentsService.remove(id);
    }
    constructor(agentsService){
        this.agentsService = agentsService;
    }
};
_ts_decorate([
    (0, _common.Get)('public'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], AgentsController.prototype, "findPublic", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    (0, _common.Get)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], AgentsController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    (0, _common.Get)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], AgentsController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    (0, _common.Post)(),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createagentdto.CreateAgentDto === "undefined" ? Object : _createagentdto.CreateAgentDto
    ]),
    _ts_metadata("design:returntype", void 0)
], AgentsController.prototype, "create", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    (0, _common.Patch)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updateagentdto.UpdateAgentDto === "undefined" ? Object : _updateagentdto.UpdateAgentDto
    ]),
    _ts_metadata("design:returntype", void 0)
], AgentsController.prototype, "update", null);
_ts_decorate([
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    (0, _common.Delete)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], AgentsController.prototype, "remove", null);
AgentsController = _ts_decorate([
    (0, _common.Controller)('agents'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _agentsservice.AgentsService === "undefined" ? Object : _agentsservice.AgentsService
    ])
], AgentsController);

//# sourceMappingURL=agents.controller.js.map