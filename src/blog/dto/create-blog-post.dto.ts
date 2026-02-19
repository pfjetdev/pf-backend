export class CreateBlogPostDto {
  slug!: string;
  title!: string;
  excerpt?: string;
  content?: string;
  imageUrl?: string;
  category?: string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  readTime?: string;
  isTrending?: boolean;
  isPublished?: boolean;
  publishedAt?: string;
}
