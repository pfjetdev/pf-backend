import { IsArray, IsString, IsOptional, ArrayMaxSize, ArrayMinSize, IsUUID, ValidateIf, IsIn } from 'class-validator';

export class BulkIdsDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  @IsUUID('4', { each: true })
  ids!: string[];
}

/** All valid statuses across both leads and beat-my-price */
const ALL_STATUSES = [
  'new', 'contacted', 'qualified', 'quoted', 'booked', 'lost', // leads
  'reviewing', 'won', // beat-my-price extras
];

export class BulkStatusDto extends BulkIdsDto {
  @IsString()
  @IsIn(ALL_STATUSES)
  status!: string;
}

export class BulkAssignDto extends BulkIdsDto {
  @IsOptional()
  @ValidateIf((o) => o.agentId !== null)
  @IsUUID('4')
  agentId!: string | null;
}
