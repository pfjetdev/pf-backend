import { Controller, Post, Body } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

const VALID_PAGES = ['search', 'homepage'];

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Post('variant-view')
  async trackVariantView(
    @Body('variant') variant: string,
    @Body('page') page?: string,
    @Body('visitorId') visitorId?: string,
  ) {
    if (variant !== 'A' && variant !== 'B') {
      return { ok: false };
    }
    if (!visitorId || typeof visitorId !== 'string' || visitorId.length > 200) {
      return { ok: false };
    }
    const safePage = page && VALID_PAGES.includes(page) ? page : 'search';
    await this.analyticsService.trackVariantView(variant, safePage, visitorId);
    return { ok: true };
  }
}
