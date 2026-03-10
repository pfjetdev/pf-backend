import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateLeadDto {
  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  agentId?: string | null;

  @IsOptional()
  @IsString()
  agentNotes?: string;

  @IsOptional()
  @IsNumber()
  quotedPrice?: number | null;
}
