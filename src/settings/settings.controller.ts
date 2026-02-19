import { Controller, Get, Param, Patch, Body, UseGuards } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  // Public — needed by search page server component
  @Get()
  getAll() {
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
