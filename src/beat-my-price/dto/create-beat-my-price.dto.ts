import { IsString, IsOptional, IsEmail, IsNumber, IsUrl, Min, MaxLength } from 'class-validator';

export class CreateBeatMyPriceDto {
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
  cabinClass?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  competitorPrice?: number;

  @IsOptional()
  @IsUrl()
  @MaxLength(2000)
  competitorUrl?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  screenshotUrl?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  phone?: string;

  @IsEmail()
  email!: string;
}
