import { IsEmail, IsString, IsEnum, IsOptional, MinLength, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum InvitationStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REVOKED = 'revoked',
  EXPIRED = 'expired',
}

export class InviteUserDto {
  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'EMP', description: 'Role code (OA, HR, MGR, EMP, or custom role code)' })
  @IsString()
  roleCode: string;
}

export class AcceptInvitationDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @MinLength(2)
  fullName: string;

  @ApiProperty({ example: 'abc123...', description: 'Invitation token from email link' })
  @IsString()
  token: string;
}