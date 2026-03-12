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
  @MaxLength(10)
  origin?: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  destination?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  departDate?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  returnDate?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
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
  @MaxLength(200)
  formLocation?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  abVariant?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  source?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  sourceUrl?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  utmSource?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  utmMedium?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  utmCampaign?: string;
}
