import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async trackVariantView(variant: string, page: string = 'search', visitorId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    try {
      // One visitor = one view per page per day (duplicates ignored)
      await this.prisma.abVariantView.upsert({
        where: { visitorId_page_date: { visitorId, page, date: today } },
        update: {},
        create: { variant, page, visitorId, date: today },
      });
    } catch (e: any) {
      // P2002 = unique constraint violation (race condition with Neon adapter)
      // Record already exists — exactly the outcome we want, so ignore.
      if (e?.code !== 'P2002') throw e;
    }
  }
}
