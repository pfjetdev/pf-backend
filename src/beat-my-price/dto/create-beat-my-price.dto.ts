import { IsString, IsOptional, IsEmail, IsNumber, IsUrl, Min, MaxLength } from 'class-validator';

export class CreateBeatMyPriceDto {
  @IsOptional()
  @IsString()
  origin?: string;

  @IsOptional()
  @IsString()
  destination?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  competitorPrice?: number;

  @IsOptional()
  @IsUrl()
  competitorUrl?: string;

  @IsOptional()
  @IsString()
  screenshotUrl?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  phone?: string;

  @IsEmail()
  email!: string;
}
