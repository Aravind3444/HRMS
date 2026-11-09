import { IsOptional, IsString, IsInt, IsBoolean, Min, Max, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTenantSettingsDto {
  @ApiPropertyOptional({ example: 'IN', description: 'ISO 3166-1 alpha-2 country code' })
  @IsOptional()
  @IsString()
  @IsIn(['IN', 'US', 'GB', 'AE', 'SG', 'AU', 'CA']) // Expand as needed
  country?: string;

  @ApiPropertyOptional({ example: 'Asia/Kolkata', description: 'IANA timezone' })
  @IsOptional()
  @IsString()
  timezone?: string;

  @ApiPropertyOptional({ example: 'INR', description: 'ISO 4217 currency code' })
  @IsOptional()
  @IsString()
  @IsIn(['INR', 'USD', 'EUR', 'GBP', 'AED', 'SGD', 'AUD', 'CAD'])
  currency?: string;

  @ApiPropertyOptional({ example: 1, description: 'Week start day (1=Monday, 7=Sunday)' })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(7)
  weekStartDay?: number;

  @ApiPropertyOptional({ example: true, description: 'Require MFA for all users in tenant' })
  @IsOptional()
  @IsBoolean()
  mfaRequired?: boolean;

  @ApiPropertyOptional({ example: 12, description: 'Session idle timeout in hours (1-168)' })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(168)
  sessionTtlHours?: number;
}