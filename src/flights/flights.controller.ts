import { Controller, Get, Query, Param, NotFoundException } from '@nestjs/common';
import { FlightsService } from './flights.service';
import type { SearchParams } from './flights.types';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flights: FlightsService) {}

  /** Public: generate flights for a search query */
  @Get('search')
  async search(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('depart') depart: string,
    @Query('return') returnDate?: string,
    @Query('cabin') cabin?: string,
    @Query('adults') adults?: string,
    @Query('children') children?: string,
    @Query('infants') infants?: string,
    @Query('pets') pets?: string,
    @Query('type') type?: string,
    // Multi-city legs as JSON string: [{"from":"NYC","to":"LON","depart":"2026-04-06"}, ...]
    @Query('legs') legsJson?: string,
  ) {
    if (!from || !to || !depart) {
      return { flights: [] };
    }

    let legs: SearchParams['legs'];
    if (legsJson) {
      try {
        legs = JSON.parse(legsJson);
      } catch {
        legs = undefined;
      }
    }

    const params: SearchParams = {
      from: from.toUpperCase(),
      to: to.toUpperCase(),
      depart,
      return: returnDate || undefined,
      cabin: (['economy', 'premium', 'business', 'first'].includes(cabin || '') ? cabin : 'business') as SearchParams['cabin'],
      adults: parseInt(adults || '1', 10) || 1,
      children: parseInt(children || '0', 10) || 0,
      infants: parseInt(infants || '0', 10) || 0,
      pets: parseInt(pets || '0', 10) || 0,
      type: (['round', 'oneway', 'multi'].includes(type || '') ? type : (returnDate ? 'round' : 'oneway')) as SearchParams['type'],
      legs,
    };

    return this.flights.search(params);
  }

  /** Public: reconstruct a flight from a lead source string */
  @Get('reconstruct/:source')
  async reconstruct(@Param('source') source: string) {
    const result = await this.flights.reconstructFromSource(source);
    if (!result) {
      throw new NotFoundException('Flight not found for this source');
    }
    return result;
  }
}
