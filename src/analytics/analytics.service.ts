import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async trackVariantView(variant: string, page: string = 'search') {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await this.prisma.abVariantView.upsert({
      where: { variant_page_date: { variant, page, date: today } },
      update: { count: { increment: 1 } },
      create: { variant, page, date: today, count: 1 },
    });
  }
}
