import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SettingsService } from '../settings/settings.service';
import { TierPricingService } from './tier-pricing.service';
import { generateFlightResults, getAirlineLogo } from './generate-flights';
import type { SearchParams, FlightResult, FlightGeneratorConfig, AirlineInfo, FlightSearchResponse } from './flights.types';

@Injectable()
export class FlightsService {
  constructor(
    private prisma: PrismaService,
    private settings: SettingsService,
    private tierPricing: TierPricingService,
  ) {}

  /** Generate flight results + tier pricing for a search query */
  async search(params: SearchParams): Promise<FlightSearchResponse> {
    const [airlines, settings] = await Promise.all([
      this.getAirlines(),
      this.settings.getAll(),
    ]);
    const config = parseFlightConfig(settings);
    const flights = generateFlightResults(params, airlines, config);
    const tierPricing = flights.length > 0
      ? await this.tierPricing.compute(flights[0].price, params.cabin)
      : undefined;
    return { flights, tierPricing };
  }

  /** Reconstruct a single flight from a lead source string (e.g. "flight:fl-NYC-LON-...") */
  async reconstructFromSource(source: string): Promise<{ flight: FlightResult; params: SearchParams } | null> {
    if (!source.startsWith('flight:fl-')) return null;

    const raw = source.slice('flight:fl-'.length);
    const parts = raw.split('-');

    let from: string,
      to: string,
      depart: string,
      returnDate: string | undefined,
      cabin: string,
      index: number;

    if (parts.length >= 10) {
      from = parts[0];
      to = parts[1];
      depart = `${parts[2]}-${parts[3]}-${parts[4]}`;
      returnDate = `${parts[5]}-${parts[6]}-${parts[7]}`;
      cabin = parts[8];
      index = parseInt(parts[9], 10);
    } else if (parts.length >= 7) {
      from = parts[0];
      to = parts[1];
      depart = `${parts[2]}-${parts[3]}-${parts[4]}`;
      cabin = parts[5];
      index = parseInt(parts[6], 10);
    } else {
      return null;
    }

    if (isNaN(index)) return null;

    const params: SearchParams = {
      from,
      to,
      depart,
      return: returnDate,
      cabin: cabin as SearchParams['cabin'],
      adults: 1,
      children: 0,
      infants: 0,
      pets: 0,
      type: returnDate ? 'round' : 'oneway',
    };

    const settings = await this.settings.getAll();
    const config = parseFlightConfig(settings);
    const flights = generateFlightResults(params, [], config);
    const seed = `${from}-${to}-${depart}-${returnDate || ''}-${cabin}`;
    const flightId = `fl-${seed}-${index}`;
    const flight = flights.find((f) => f.id === flightId);
    if (!flight) return null;

    return { flight, params };
  }

  /** Fetch active airlines from DB, mapped to AirlineInfo */
  private async getAirlines(): Promise<AirlineInfo[]> {
    const rows = await this.prisma.airline.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    });
    return rows.map((a) => ({
      name: a.name,
      logo: a.logoUrl || getAirlineLogo(a.name),
      routeCodes: a.routeCodes ?? [],
    }));
  }
}

/** Parse SiteSetting key-value pairs into FlightGeneratorConfig */
function parseFlightConfig(
  settings: Record<string, string>,
): Partial<FlightGeneratorConfig> {
  const config: Partial<FlightGeneratorConfig> = {};

  const rc = parseInt(settings.flight_result_count ?? '', 10);
  if (!Number.isNaN(rc) && rc > 0 && rc <= 50) {
    config.resultCount = rc;
  }

  const seatsRaw = settings.flight_seats_range;
  if (seatsRaw) {
    const parts = seatsRaw.split(',').map(Number);
    if (parts.length === 2 && parts.every((n) => !Number.isNaN(n) && n >= 0)) {
      config.seatsLeftRange = [parts[0], parts[1]];
    }
  }

  const cabins = ['economy', 'premium', 'business', 'first'] as const;

  const priceRange: Record<string, [number, number]> = {};
  let hasPriceRange = false;
  for (const cabin of cabins) {
    const raw = settings[`flight_price_${cabin}`];
    if (raw) {
      const parts = raw.split(',').map(Number);
      if (parts.length === 2 && parts.every((n) => !Number.isNaN(n) && n > 0)) {
        priceRange[cabin] = [parts[0], parts[1]];
        hasPriceRange = true;
      }
    }
  }
  if (hasPriceRange) config.priceRange = priceRange;

  const markupRange: Record<string, [number, number]> = {};
  let hasMarkupRange = false;
  for (const cabin of cabins) {
    const raw = settings[`flight_markup_${cabin}`];
    if (raw) {
      const parts = raw.split(',').map(Number);
      if (parts.length === 2 && parts.every((n) => !Number.isNaN(n) && n > 0)) {
        markupRange[cabin] = [parts[0], parts[1]];
        hasMarkupRange = true;
      }
    }
  }
  if (hasMarkupRange) config.markupRange = markupRange;

  const routeKeys = [
    'domestic_us', 'intra_europe', 'short_haul', 'transatlantic',
    'us_middle_east', 'us_east_asia', 'us_south_asia', 'europe_east_asia', 'long_haul',
  ] as const;
  const routePriceFactor: Record<string, number> = {};
  let hasRouteFactor = false;
  for (const key of routeKeys) {
    const raw = settings[`flight_route_factor_${key}`];
    if (raw) {
      const n = parseFloat(raw);
      if (!Number.isNaN(n) && n > 0) {
        routePriceFactor[key] = n;
        hasRouteFactor = true;
      }
    }
  }
  if (hasRouteFactor) config.routePriceFactor = routePriceFactor;

  const sdNonstop = parseFloat(settings.flight_stop_discount_nonstop ?? '');
  const sdOneStop = parseFloat(settings.flight_stop_discount_one_stop ?? '');
  const sdTwoStops = parseFloat(settings.flight_stop_discount_two_stops ?? '');
  if ([sdNonstop, sdOneStop, sdTwoStops].every((n) => !Number.isNaN(n) && n > 0)) {
    config.stopDiscount = { nonstop: sdNonstop, oneStop: sdOneStop, twoStops: sdTwoStops };
  }

  const csp = parseFloat(settings.flight_codeshare_probability ?? '');
  if (!Number.isNaN(csp) && csp >= 0 && csp <= 1) {
    config.codeshareProbability = csp;
  }

  const seatsPerCabin: Record<string, [number, number]> = {};
  let hasSeatsPerCabin = false;
  for (const cabin of cabins) {
    const raw = settings[`flight_seats_${cabin}`];
    if (raw) {
      const parts = raw.split(',').map(Number);
      if (parts.length === 2 && parts.every((n) => !Number.isNaN(n) && n >= 0)) {
        seatsPerCabin[cabin] = [parts[0], parts[1]];
        hasSeatsPerCabin = true;
      }
    }
  }
  if (hasSeatsPerCabin) config.seatsPerCabin = seatsPerCabin;

  return config;
}
