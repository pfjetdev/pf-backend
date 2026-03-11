/** Parsed search parameters */
export interface SearchParams {
  from: string;
  to: string;
  depart: string;
  return?: string;
  cabin: 'premium' | 'business' | 'first';
  adults: number;
  children: number;
  infants: number;
  pets: number;
  type: 'round' | 'oneway' | 'multi';
  legs?: Array<{ from: string; to: string; depart: string }>;
}

/** A single flight leg (outbound or return) */
export interface FlightLeg {
  airlineName: string;
  airlineLogo: string;
  flightNumber: string;
  departureCode: string;
  arrivalCode: string;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  departureDate?: string;
  arrivalDate?: string;
  duration: string;
  stops: number;
  stopCity?: string;
  nextDay?: number;
  aircraftType?: string;
  operatedBy?: string;
}

/** Baggage allowance */
export interface BaggageInfo {
  carryOn: boolean;
  checkedBags: number;
  checkedBagWeight?: string;
}

/** A complete flight result */
export interface FlightResult {
  id: string;
  outbound: FlightLeg;
  inbound?: FlightLeg;
  legs?: FlightLeg[];
  price: number;
  originalPrice: number;
  seatsLeft: number;
  isPremiumPick: boolean;
  savingsPercent: number;
  baggage: BaggageInfo;
  fareClass?: string;
}

/** Pre-computed tier prices for Variant B */
export interface TierPrice {
  price: number;
  originalPrice: number;
}

export interface TierPricing {
  premium: TierPrice;
  business: TierPrice;
  first: TierPrice;
}

/** Search response returned by the API */
export interface FlightSearchResponse {
  flights: FlightResult[];
  tierPricing?: TierPricing;
}

/** Config object (connected to DB via SiteSetting) */
export interface FlightGeneratorConfig {
  resultCount: number;
  priceRange?: Record<string, [number, number]>;
  markupRange?: Record<string, [number, number]>;
  seatsLeftRange: [number, number];
  routePriceFactor?: Record<string, number>;
  stopDiscount?: { nonstop: number; oneStop: number; twoStops: number };
  codeshareProbability?: number;
  seatsPerCabin?: Record<string, [number, number]>;
}

/** Airline info (simplified for generator) */
export interface AirlineInfo {
  name: string;
  logo: string;
  routeCodes?: string[];
}
