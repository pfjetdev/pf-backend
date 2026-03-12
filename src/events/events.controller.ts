import {
  Controller,
  Sse,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { Observable, map, takeUntil, timer } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { EventsService } from './events.service';

interface MessageEvent {
  data: string | object;
  type?: string;
  id?: string;
}

@Controller('events')
export class EventsController {
  constructor(
    private eventsService: EventsService,
    private jwtService: JwtService,
  ) {}

  private verifyToken(token?: string) {
    if (!token) throw new UnauthorizedException('Token required');
    try {
      this.jwtService.verify(token);
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }

  /** Unified admin stream — emits new-lead and new-beat-my-price events */
  @SkipThrottle()
  @Sse('leads')
  adminStream(@Query('token') token?: string): Observable<MessageEvent> {
    this.verifyToken(token);

    // Auto-close SSE after 4 hours to prevent connection/memory leaks
    return this.eventsService.adminEvents$.pipe(
      takeUntil(timer(4 * 60 * 60 * 1000)),
      map((event) => ({
        data: JSON.stringify(event.data),
        type: event.type,
      })),
    );
  }
}
