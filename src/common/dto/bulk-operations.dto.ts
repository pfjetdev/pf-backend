import { IsArray, IsString, IsOptional, ArrayMaxSize, ArrayMinSize, IsUUID } from 'class-validator';

export class BulkIdsDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  @IsUUID('4', { each: true })
  ids!: string[];
}

export class BulkStatusDto extends BulkIdsDto {
  @IsString()
  status!: string;
}

export class BulkAssignDto extends BulkIdsDto {
  @IsOptional()
  @IsString()
  agentId!: string | null;
}
