import { IsString, IsOptional, IsNumber, IsEnum, MaxLength, Min, IsUUID } from 'class-validator';

export enum LeadStatus {
  NEW = 'new',
  CONTACTED = 'contacted',
  QUALIFIED = 'qualified',
  QUOTED = 'quoted',
  BOOKED = 'booked',
  LOST = 'lost',
}

export class UpdateLeadDto {
  @IsOptional()
  @IsEnum(LeadStatus)
  status?: string;

  @IsOptional()
  @IsUUID('4')
  agentId?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(5000)
  agentNotes?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  quotedPrice?: number | null;
}
