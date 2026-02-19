export class CreateDealDto {
  slug!: string;
  origin!: string;
  originCode!: string;
  destination!: string;
  destinationCode!: string;
  countryCode!: string;
  cabinClass!: string;
  publicFare!: number;
  pfPrice!: number;
  imageUrl?: string;
  themeColor?: string;
  isActive?: boolean;
  sortOrder?: number;
  startsAt?: string;
  expiresAt?: string;
}
