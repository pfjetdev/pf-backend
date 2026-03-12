import { Module, Global } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: (() => {
        if (!process.env.JWT_SECRET) {
          throw new Error('JWT_SECRET environment variable is required');
        }
        return process.env.JWT_SECRET;
      })(),
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}
