import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async trackVariantView(variant: string, page: string = 'search', visitorId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // One visitor = one view per page per day (duplicates ignored)
    await this.prisma.abVariantView.upsert({
      where: { visitorId_page_date: { visitorId, page, date: today } },
      update: {},
      create: { variant, page, visitorId, date: today },
    });
  }
}
