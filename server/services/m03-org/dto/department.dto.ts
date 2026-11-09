import { IsString, IsOptional, MinLength, MaxLength, IsBoolean, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDepartmentDto {
  @ApiProperty({ example: 'Engineering' })
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  name: string;

  @ApiProperty({ example: 'ENG' })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  code: string;

  @ApiPropertyOptional({ example: 'Software development department' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'parent-department-uuid' })
  @IsOptional()
  @IsUUID()
  parentDepartmentId?: string;

  @ApiPropertyOptional({ example: 'employee-uuid' })
  @IsOptional()
  @IsUUID()
  headEmployeeId?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateDepartmentDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  code?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  parentDepartmentId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  headEmployeeId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
