import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum TenantLifecycleAction {
  APPROVE = 'approve',
  REJECT = 'reject',
  SUSPEND = 'suspend',
  REACTIVATE = 'reactivate',
  CANCEL = 'cancel',
  ARCHIVE = 'archive',
}

export class UpdateTenantStatusDto {
  @ApiProperty({ enum: TenantLifecycleAction, example: TenantLifecycleAction.APPROVE })
  @IsEnum(TenantLifecycleAction)
  action: TenantLifecycleAction;

  @ApiPropertyOptional({ example: 'Approved after verification of KYC documents' })
  @IsOptional()
  @IsString()
  reason?: string;
}

