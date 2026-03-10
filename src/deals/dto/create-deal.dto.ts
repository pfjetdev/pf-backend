import { IsString, IsOptional, IsNumber, IsBoolean, IsInt, Min, MaxLength } from 'class-validator';

export class CreateDealDto {
  @IsString()
  @MaxLength(200)
  slug!: string;

  @IsString()
  origin!: string;

  @IsString()
  originCode!: string;

  @IsString()
  destination!: string;

  @IsString()
  destinationCode!: string;

  @IsString()
  countryCode!: string;

  @IsString()
  cabinClass!: string;

  @IsNumber()
  @Min(0)
  publicFare!: number;

  @IsNumber()
  @Min(0)
  pfPrice!: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  themeColor?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsInt()
  sortOrder?: number;

  @IsOptional()
  @IsString()
  startsAt?: string;

  @IsOptional()
  @IsString()
  expiresAt?: string;
}
