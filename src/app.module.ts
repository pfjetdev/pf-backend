import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { LeadsModule } from './leads/leads.module';
import { DealsModule } from './deals/deals.module';
import { DestinationsModule } from './destinations/destinations.module';
import { AirlinesModule } from './airlines/airlines.module';
import { BlogModule } from './blog/blog.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { BeatMyPriceModule } from './beat-my-price/beat-my-price.module';
import { AgentsModule } from './agents/agents.module';
import { EventsModule } from './events/events.module';
import { SettingsModule } from './settings/settings.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { FlightsModule } from './flights/flights.module';
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    AdminModule,
    EventsModule,
    SettingsModule,
    AnalyticsModule,
    FlightsModule,
    CatalogModule,
    LeadsModule,
    DealsModule,
    DestinationsModule,
    AirlinesModule,
    BlogModule,
    TestimonialsModule,
    BeatMyPriceModule,
    AgentsModule,
  ],
})
export class AppModule {}
