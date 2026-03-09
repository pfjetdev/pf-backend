import { Controller, Get, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalog: CatalogService) {}

  @Get('home')
  async getHome() {
    return this.catalog.getHomePage();
  }

  @Get('regions')
  async getRegions() {
    return this.catalog.getRegions();
  }

  @Get('regions/:region')
  async getRegion(@Param('region') region: string) {
    return this.catalog.getRegion(region);
  }

  @Get('regions/:region/:country')
  async getCountry(
    @Param('region') region: string,
    @Param('country') country: string,
  ) {
    return this.catalog.getCountry(region, country);
  }

  @Get('deals/featured')
  async getFeaturedDeals() {
    return this.catalog.getFeaturedDeals();
  }

  @Get('deals/:slug')
  async getDeal(@Param('slug') slug: string) {
    return this.catalog.getDealPage(slug);
  }

  @Get('airlines')
  async getAirlinesHome() {
    return this.catalog.getAirlinesHome();
  }

  @Get('airlines/:slug')
  async getAirlinePage(@Param('slug') slug: string) {
    return this.catalog.getAirlinePage(slug);
  }
}
