"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DestinationsController", {
    enumerable: true,
    get: function() {
        return DestinationsController;
    }
});
const _common = require("@nestjs/common");
const _destinationsservice = require("./destinations.service");
const _jwtauthguard = require("../auth/jwt-auth.guard");
const _rolesguard = require("../auth/roles.guard");
const _rolesdecorator = require("../auth/roles.decorator");
const _createdestinationdto = require("./dto/create-destination.dto");
const _updatedestinationdto = require("./dto/update-destination.dto");
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
let DestinationsController = class DestinationsController {
    findAll(region, all) {
        return this.destinationsService.findAll(region, all === 'true');
    }
    getFromDeals() {
        return this.destinationsService.getUniqueFromDeals();
    }
    findOne(id) {
        return this.destinationsService.findOne(id);
    }
    create(dto) {
        return this.destinationsService.create(dto);
    }
    update(id, dto) {
        return this.destinationsService.update(id, dto);
    }
    remove(id) {
        return this.destinationsService.remove(id);
    }
    constructor(destinationsService){
        this.destinationsService = destinationsService;
    }
};
_ts_decorate([
    (0, _common.Get)(),
    _ts_param(0, (0, _common.Query)('region')),
    _ts_param(1, (0, _common.Query)('all')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], DestinationsController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)('from-deals'),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], DestinationsController.prototype, "getFromDeals", null);
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
], DestinationsController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createdestinationdto.CreateDestinationDto === "undefined" ? Object : _createdestinationdto.CreateDestinationDto
    ]),
    _ts_metadata("design:returntype", void 0)
], DestinationsController.prototype, "create", null);
_ts_decorate([
    (0, _common.Patch)(':id'),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updatedestinationdto.UpdateDestinationDto === "undefined" ? Object : _updatedestinationdto.UpdateDestinationDto
    ]),
    _ts_metadata("design:returntype", void 0)
], DestinationsController.prototype, "update", null);
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
], DestinationsController.prototype, "remove", null);
DestinationsController = _ts_decorate([
    (0, _common.Controller)('destinations'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _destinationsservice.DestinationsService === "undefined" ? Object : _destinationsservice.DestinationsService
    ])
], DestinationsController);

//# sourceMappingURL=destinations.controller.js.map