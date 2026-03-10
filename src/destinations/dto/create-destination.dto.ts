import { IsString, IsOptional, IsNumber, IsBoolean, IsInt, Min } from 'class-validator';

export class CreateDestinationDto {
  @IsString()
  city!: string;

  @IsString()
  country!: string;

  @IsString()
  countryCode!: string;

  @IsString()
  airportCode!: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsNumber()
  @Min(0)
  fromPrice!: number;

  @IsString()
  region!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
