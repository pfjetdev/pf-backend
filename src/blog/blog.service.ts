import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: { publishedAt: 'desc' },
    });
  }

  async findBySlug(slug: string) {
    const post = await this.prisma.blogPost.findUnique({
      where: { slug },
    });
    if (!post || !post.isPublished) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async findAllAdmin() {
    return this.prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const post = await this.prisma.blogPost.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundException(`Blog post with id ${id} not found`);
    }
    return post;
  }

  async create(dto: CreateBlogPostDto) {
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
        publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : undefined,
      },
    });
  }

  async update(id: string, dto: UpdateBlogPostDto) {
    await this.findOne(id);
    return this.prisma.blogPost.update({
      where: { id },
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
        publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.blogPost.delete({ where: { id } });
  }
}
