import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { OriginGuard } from './common/guards/origin.guard';
import { HealthController } from './health.controller';
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
    ThrottlerModule.forRoot([
      { name: 'short', ttl: 1000, limit: 5 },
      { name: 'medium', ttl: 10000, limit: 30 },
      { name: 'long', ttl: 60000, limit: 120 },
    ]),
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
  controllers: [HealthController],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: OriginGuard },
  ],
})
export class AppModule {}
