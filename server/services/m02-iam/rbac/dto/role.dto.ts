import { IsString, IsOptional, IsArray, IsEnum, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'PROJECT_MANAGER', description: 'Unique role code (uppercase, underscores)' })
  @IsString()
  code: string;

  @ApiProperty({ example: 'Project Manager' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'Manages projects and team members' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ type: [String], example: ['employee:read', 'project:create'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permissionCodes?: string[];
}

export class UpdateRoleDto {
  @ApiPropertyOptional({ example: 'Senior Project Manager' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'Manages senior projects and mentors PMs' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ type: [String], example: ['employee:read', 'project:create', 'project:delete'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permissionCodes?: string[];
}

export class GrantRoleDto {
  @ApiProperty({ example: 'user-uuid-here' })
  @IsUUID()
  userId: string;

  @ApiProperty({ example: 'role-uuid-here' })
  @IsUUID()
  roleId: string;

  @ApiProperty({ enum: ['SELF', 'TEAM', 'TEAM_TREE', 'DEPARTMENT', 'LOCATION', 'LEGAL_ENTITY', 'ORGANIZATION', 'ASSIGNED'], example: 'ORGANIZATION' })
  @IsEnum(['SELF', 'TEAM', 'TEAM_TREE', 'DEPARTMENT', 'LOCATION', 'LEGAL_ENTITY', 'ORGANIZATION', 'ASSIGNED'])
  scopeType: 'SELF' | 'TEAM' | 'TEAM_TREE' | 'DEPARTMENT' | 'LOCATION' | 'LEGAL_ENTITY' | 'ORGANIZATION' | 'ASSIGNED';

  @ApiPropertyOptional({ example: 'department-uuid-here', description: 'Required for non-ORGANIZATION scopes' })
  @IsOptional()
  @IsUUID()
  scopeId?: string;

  @ApiPropertyOptional({ example: '2025-12-31T23:59:59Z', description: 'Optional expiration date' })
  @IsOptional()
  expiresAt?: Date;
}