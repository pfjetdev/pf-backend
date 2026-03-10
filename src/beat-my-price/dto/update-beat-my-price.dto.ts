import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateBeatMyPriceDto {
  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsNumber()
  ourPrice?: number | null;

  @IsOptional()
  @IsString()
  agentId?: string | null;

  @IsOptional()
  @IsString()
  agentNotes?: string;
}
