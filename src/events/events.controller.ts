import {
  Controller,
  Sse,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
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
  @Sse('leads')
  adminStream(@Query('token') token?: string): Observable<MessageEvent> {
    this.verifyToken(token);

    return this.eventsService.adminEvents$.pipe(
      map((event) => ({
        data: JSON.stringify(event.data),
        type: event.type,
      })),
    );
  }
}
