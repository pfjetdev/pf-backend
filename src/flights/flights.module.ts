import { Module } from '@nestjs/common';
import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';
import { TierPricingService } from './tier-pricing.service';
import { SettingsModule } from '../settings/settings.module';

@Module({
  imports: [SettingsModule],
  controllers: [FlightsController],
  providers: [FlightsService, TierPricingService],
  exports: [FlightsService],
})
export class FlightsModule {}
