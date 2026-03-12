import { IsString, IsOptional, IsNumber, IsEnum, MaxLength, Min, IsUUID, ValidateIf } from 'class-validator';

export enum BmpStatus {
  NEW = 'new',
  REVIEWING = 'reviewing',
  QUOTED = 'quoted',
  WON = 'won',
  LOST = 'lost',
}

export class UpdateBeatMyPriceDto {
  @IsOptional()
  @IsEnum(BmpStatus)
  status?: string;

  @IsOptional()
  @ValidateIf((o) => o.ourPrice !== null)
  @IsNumber()
  @Min(0)
  ourPrice?: number | null;

  @IsOptional()
  @ValidateIf((o) => o.agentId !== null)
  @IsUUID('4')
  agentId?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(5000)
  agentNotes?: string;
}
