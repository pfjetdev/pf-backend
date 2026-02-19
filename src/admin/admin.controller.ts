import { Controller, Delete, Get, Query, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

const VALID_PAGES = ['search', 'homepage'];

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @UseGuards(JwtAuthGuard)
  @Get('stats')
  getStats() {
    return this.adminService.getStats();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('ab-stats')
  getAbTestStats(@Query('page') page?: string) {
    const safePage = page && VALID_PAGES.includes(page) ? page : 'search';
    return this.adminService.getAbTestStats(safePage);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete('ab-views')
  resetAbViews(@Query('page') page?: string) {
    const safePage = page && VALID_PAGES.includes(page) ? page : undefined;
    return this.adminService.resetAbViews(safePage);
  }
}
