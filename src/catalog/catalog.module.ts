import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import { DestinationsModule } from '../destinations/destinations.module';
import { DealsModule } from '../deals/deals.module';
import { AirlinesModule } from '../airlines/airlines.module';
import { SettingsModule } from '../settings/settings.module';

@Module({
  imports: [DestinationsModule, DealsModule, AirlinesModule, SettingsModule],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule {}
