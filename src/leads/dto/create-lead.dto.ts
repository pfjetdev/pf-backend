import { IsString, IsOptional, IsEmail, IsNumber, IsInt, Min, Max, MaxLength } from 'class-validator';

export class CreateLeadDto {
  @IsString()
  @MaxLength(200)
  name!: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  @MaxLength(30)
  phone!: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  message?: string;

  @IsOptional()
  @IsString()
  origin?: string;

  @IsOptional()
  @IsString()
  destination?: string;

  @IsOptional()
  @IsString()
  departDate?: string;

  @IsOptional()
  @IsString()
  returnDate?: string;

  @IsOptional()
  @IsString()
  cabinClass?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(9)
  passengersAdults?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(9)
  passengersChildren?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(9)
  passengersInfants?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(9)
  passengersPets?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  quotedPrice?: number;

  @IsOptional()
  @IsString()
  formLocation?: string;

  @IsOptional()
  @IsString()
  abVariant?: string;

  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @IsString()
  sourceUrl?: string;

  @IsOptional()
  @IsString()
  utmSource?: string;

  @IsOptional()
  @IsString()
  utmMedium?: string;

  @IsOptional()
  @IsString()
  utmCampaign?: string;
}
