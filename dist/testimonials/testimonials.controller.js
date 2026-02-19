"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TestimonialsController", {
    enumerable: true,
    get: function() {
        return TestimonialsController;
    }
});
const _common = require("@nestjs/common");
const _testimonialsservice = require("./testimonials.service");
const _jwtauthguard = require("../auth/jwt-auth.guard");
const _rolesguard = require("../auth/roles.guard");
const _rolesdecorator = require("../auth/roles.decorator");
const _createtestimonialdto = require("./dto/create-testimonial.dto");
const _updatetestimonialdto = require("./dto/update-testimonial.dto");
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
let TestimonialsController = class TestimonialsController {
    findAll(all) {
        return this.testimonialsService.findAll(all === 'true');
    }
    findOne(id) {
        return this.testimonialsService.findOne(id);
    }
    create(dto) {
        return this.testimonialsService.create(dto);
    }
    update(id, dto) {
        return this.testimonialsService.update(id, dto);
    }
    remove(id) {
        return this.testimonialsService.remove(id);
    }
    constructor(testimonialsService){
        this.testimonialsService = testimonialsService;
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
], TestimonialsController.prototype, "findAll", null);
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
], TestimonialsController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createtestimonialdto.CreateTestimonialDto === "undefined" ? Object : _createtestimonialdto.CreateTestimonialDto
    ]),
    _ts_metadata("design:returntype", void 0)
], TestimonialsController.prototype, "create", null);
_ts_decorate([
    (0, _common.Patch)(':id'),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updatetestimonialdto.UpdateTestimonialDto === "undefined" ? Object : _updatetestimonialdto.UpdateTestimonialDto
    ]),
    _ts_metadata("design:returntype", void 0)
], TestimonialsController.prototype, "update", null);
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
], TestimonialsController.prototype, "remove", null);
TestimonialsController = _ts_decorate([
    (0, _common.Controller)('testimonials'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _testimonialsservice.TestimonialsService === "undefined" ? Object : _testimonialsservice.TestimonialsService
    ])
], TestimonialsController);

//# sourceMappingURL=testimonials.controller.js.map