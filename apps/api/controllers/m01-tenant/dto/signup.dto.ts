import { IsEmail, IsString, MinLength, MaxLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupDto {
  @ApiProperty({ example: 'Acme Corp' })
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  companyName: string;

  @ApiProperty({ example: 'acme-corp', description: 'URL-safe slug (lowercase, hyphens only)' })
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @Matches(/^[a-z0-9-]+$/, { message: 'Slug must be lowercase letters, numbers, and hyphens only' })
  companySlug: string;

  @ApiProperty({ example: 'Admin User' })
  @IsString()
  @MinLength(2)
  adminFullName: string;

  @ApiProperty({ example: 'admin@acme.com' })
  @IsEmail()
  adminEmail: string;

  @ApiProperty({ minLength: 8 })
  @IsString()
  @MinLength(8)
  adminPassword: string;

  @ApiProperty({ example: '+91-9876543210', required: false })
  @IsString()
  adminPhoneNumber?: string;
}
