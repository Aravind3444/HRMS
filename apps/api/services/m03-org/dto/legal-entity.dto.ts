import { IsString, IsOptional, MinLength, MaxLength, IsBoolean, IsEnum, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLegalEntityDto {
  @ApiProperty({ example: 'Acme Corp Pvt Ltd' })
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  name: string;

  @ApiProperty({ example: 'ACME' })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  code: string;

  @ApiPropertyOptional({ example: 'U12345678901234567890' })
  @IsOptional()
  @IsString()
  cin?: string;

  @ApiPropertyOptional({ example: 'ABCDE1234F' })
  @IsOptional()
  @IsString()
  pan?: string;

  @ApiPropertyOptional({ example: 'ABCD12345E' })
  @IsOptional()
  @IsString()
  tan?: string;

  @ApiPropertyOptional({ example: '27ABCDE1234F1Z5' })
  @IsOptional()
  @IsString()
  gstin?: string;

  @ApiPropertyOptional({ example: 'PN123456' })
  @IsOptional()
  @IsString()
  pfNumber?: string;

  @ApiPropertyOptional({ example: 'ESI123456' })
  @IsOptional()
  @IsString()
  esiNumber?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;
}

export class UpdateLegalEntityDto {
  @ApiPropertyOptional({ example: 'Acme Corp Pvt Ltd' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'ACME' })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cin?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pan?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  tan?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  gstin?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pfNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  esiNumber?: string;
}
