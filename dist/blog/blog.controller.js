"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BlogController", {
    enumerable: true,
    get: function() {
        return BlogController;
    }
});
const _common = require("@nestjs/common");
const _blogservice = require("./blog.service");
const _jwtauthguard = require("../auth/jwt-auth.guard");
const _rolesguard = require("../auth/roles.guard");
const _rolesdecorator = require("../auth/roles.decorator");
const _createblogpostdto = require("./dto/create-blog-post.dto");
const _updateblogpostdto = require("./dto/update-blog-post.dto");
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
let BlogController = class BlogController {
    findAll() {
        return this.blogService.findAll();
    }
    findAllAdmin() {
        return this.blogService.findAllAdmin();
    }
    findOneAdmin(id) {
        return this.blogService.findOne(id);
    }
    findBySlug(slug) {
        return this.blogService.findBySlug(slug);
    }
    create(dto) {
        return this.blogService.create(dto);
    }
    update(id, dto) {
        return this.blogService.update(id, dto);
    }
    remove(id) {
        return this.blogService.remove(id);
    }
    constructor(blogService){
        this.blogService = blogService;
    }
};
_ts_decorate([
    (0, _common.Get)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], BlogController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)('admin/all'),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], BlogController.prototype, "findAllAdmin", null);
_ts_decorate([
    (0, _common.Get)('admin/:id'),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], BlogController.prototype, "findOneAdmin", null);
_ts_decorate([
    (0, _common.Get)(':slug'),
    _ts_param(0, (0, _common.Param)('slug')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], BlogController.prototype, "findBySlug", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createblogpostdto.CreateBlogPostDto === "undefined" ? Object : _createblogpostdto.CreateBlogPostDto
    ]),
    _ts_metadata("design:returntype", void 0)
], BlogController.prototype, "create", null);
_ts_decorate([
    (0, _common.Patch)(':id'),
    (0, _common.UseGuards)(_jwtauthguard.JwtAuthGuard, _rolesguard.RolesGuard),
    (0, _rolesdecorator.Roles)('admin'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updateblogpostdto.UpdateBlogPostDto === "undefined" ? Object : _updateblogpostdto.UpdateBlogPostDto
    ]),
    _ts_metadata("design:returntype", void 0)
], BlogController.prototype, "update", null);
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
], BlogController.prototype, "remove", null);
BlogController = _ts_decorate([
    (0, _common.Controller)('blog'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _blogservice.BlogService === "undefined" ? Object : _blogservice.BlogService
    ])
], BlogController);

//# sourceMappingURL=blog.controller.js.map