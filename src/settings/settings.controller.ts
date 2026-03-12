import { Controller, Get, Param, Patch, Body, UseGuards } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  // Public — needed by search page server component (only public keys)
  @Get()
  async getAll() {
    const all = await this.settingsService.getAll();
    const PUBLIC_KEYS = new Set([
      'ab_test_enabled',
      'ab_default_variant',
      'homepage_ab_test_enabled',
      'homepage_ab_default_variant',
    ]);
    const filtered: Record<string, string> = {};
    for (const [key, value] of Object.entries(all)) {
      if (PUBLIC_KEYS.has(key)) filtered[key] = value;
    }
    return filtered;
  }

  // Protected — admin sees all settings
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('all')
  getAllAdmin() {
    return this.settingsService.getAll();
  }

  // Protected — admin only
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':key')
  update(@Param('key') key: string, @Body('value') value: string) {
    return this.settingsService.set(key, value);
  }
}
