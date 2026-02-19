"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BlogService", {
    enumerable: true,
    get: function() {
        return BlogService;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../prisma/prisma.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let BlogService = class BlogService {
    async findAll() {
        return this.prisma.blogPost.findMany({
            where: {
                isPublished: true
            },
            orderBy: {
                publishedAt: 'desc'
            }
        });
    }
    async findBySlug(slug) {
        const post = await this.prisma.blogPost.findUnique({
            where: {
                slug
            }
        });
        if (!post || !post.isPublished) {
            throw new _common.NotFoundException('Post not found');
        }
        return post;
    }
    async findAllAdmin() {
        return this.prisma.blogPost.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
    }
    async findOne(id) {
        const post = await this.prisma.blogPost.findUnique({
            where: {
                id
            }
        });
        if (!post) {
            throw new _common.NotFoundException(`Blog post with id ${id} not found`);
        }
        return post;
    }
    async create(dto) {
        return this.prisma.blogPost.create({
            data: {
                slug: dto.slug,
                title: dto.title,
                excerpt: dto.excerpt,
                content: dto.content,
                imageUrl: dto.imageUrl,
                category: dto.category,
                authorName: dto.authorName,
                authorRole: dto.authorRole,
                authorAvatar: dto.authorAvatar,
                readTime: dto.readTime,
                isTrending: dto.isTrending,
                isPublished: dto.isPublished,
                publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : undefined
            }
        });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.blogPost.update({
            where: {
                id
            },
            data: {
                slug: dto.slug,
                title: dto.title,
                excerpt: dto.excerpt,
                content: dto.content,
                imageUrl: dto.imageUrl,
                category: dto.category,
                authorName: dto.authorName,
                authorRole: dto.authorRole,
                authorAvatar: dto.authorAvatar,
                readTime: dto.readTime,
                isTrending: dto.isTrending,
                isPublished: dto.isPublished,
                publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : undefined
            }
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.blogPost.delete({
            where: {
                id
            }
        });
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
BlogService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], BlogService);

//# sourceMappingURL=blog.service.js.map