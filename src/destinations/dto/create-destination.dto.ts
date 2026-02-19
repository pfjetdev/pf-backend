export class CreateDestinationDto {
  city!: string;
  country!: string;
  countryCode!: string;
  airportCode!: string;
  imageUrl?: string;
  fromPrice!: number;
  region!: string;
  isActive?: boolean;
  sortOrder?: number;
}
