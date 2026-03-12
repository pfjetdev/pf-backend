import { IsString, IsOptional, IsNumber, IsEnum, MaxLength, Min, IsUUID, ValidateIf } from 'class-validator';

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
  @ValidateIf((o) => o.agentId !== null)
  @IsUUID('4')
  agentId?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(5000)
  agentNotes?: string;

  @IsOptional()
  @ValidateIf((o) => o.quotedPrice !== null)
  @IsNumber()
  @Min(0)
  quotedPrice?: number | null;
}
