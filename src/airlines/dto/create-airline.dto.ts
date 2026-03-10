import { IsString, IsOptional, IsNumber, IsBoolean, IsInt, IsArray, Min, Max } from 'class-validator';

export class CreateAirlineDto {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsString()
  logoUrl?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  featuredRoute?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  savingPercent?: number;

  @IsOptional()
  @IsString()
  iataCode?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  alliance?: string;

  @IsOptional()
  @IsString()
  hubCity?: string;

  @IsOptional()
  routeCodes?: string[] | string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
