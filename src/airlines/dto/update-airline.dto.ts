export class UpdateAirlineDto {
  name?: string;
  slug?: string;
  logoUrl?: string;
  imageUrl?: string;
  featuredRoute?: string;
  savingPercent?: number;
  iataCode?: string;
  description?: string;
  alliance?: string;
  hubCity?: string;
  routeCodes?: string[] | string;
  isActive?: boolean;
  sortOrder?: number;
}
