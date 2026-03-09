export class SearchFlightsDto {
  from!: string;
  to!: string;
  depart!: string;
  return?: string;
  cabin?: 'economy' | 'premium' | 'business' | 'first';
  adults?: number;
  children?: number;
  infants?: number;
  pets?: number;
  type?: 'round' | 'oneway' | 'multi';
  legs?: Array<{ from: string; to: string; depart: string }>;
}
