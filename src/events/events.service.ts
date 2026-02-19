import { Injectable } from '@nestjs/common';
import { Subject, merge } from 'rxjs';
import { map } from 'rxjs/operators';

export interface LeadEvent {
  id: string;
  name: string;
  phone: string;
  origin?: string;
  destination?: string;
  cabinClass?: string;
  source?: string;
  createdAt: Date;
}

export interface BeatMyPriceEvent {
  id: string;
  email: string;
  origin?: string;
  destination?: string;
  competitorPrice?: number;
  createdAt: Date;
}

@Injectable()
export class EventsService {
  private leadSubject = new Subject<LeadEvent>();
  private beatMyPriceSubject = new Subject<BeatMyPriceEvent>();

  get leadEvents$() {
    return this.leadSubject.asObservable();
  }

  get beatMyPriceEvents$() {
    return this.beatMyPriceSubject.asObservable();
  }

  /** Merged stream — both event types with `type` discriminator */
  get adminEvents$() {
    return merge(
      this.leadSubject.pipe(
        map((data) => ({ type: 'new-lead' as const, data })),
      ),
      this.beatMyPriceSubject.pipe(
        map((data) => ({ type: 'new-beat-my-price' as const, data })),
      ),
    );
  }

  emitNewLead(lead: LeadEvent) {
    this.leadSubject.next(lead);
  }

  emitNewBeatMyPrice(req: BeatMyPriceEvent) {
    this.beatMyPriceSubject.next(req);
  }
}
