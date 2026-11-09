import { IsString, IsOptional, IsBoolean, IsObject, ValidateNested, IsArray, IsUUID, IsInt, Min, Max } from 'class-validator';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

// Step 1: Profile
export class WizardStep1ProfileDto {
  @ApiProperty({ example: 'Acme Corporation' })
  @IsString()
  companyName: string;

  @ApiProperty({ example: 'IN' })
  @IsString()
  country: string;

  @ApiProperty({ example: 'Asia/Kolkata' })
  @IsString()
  timezone: string;

  @ApiProperty({ example: 'INR' })
  @IsString()
  currency: string;

  @ApiProperty({ example: 1, description: '1=Monday, 7=Sunday' })
  @IsInt()
  @Min(1)
  @Max(7)
  weekStartDay: number;
}

// Step 2: Legal Entity
export class WizardStep2LegalEntityDto {
  @ApiProperty({ example: 'Acme Corp' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'CORP' })
  @IsString()
  code: string;

  @ApiPropertyOptional({ example: 'U12345MH2020PTC123456' })
  @IsOptional()
  @IsString()
  cin?: string;

  @ApiPropertyOptional({ example: 'AAACA1234A' })
  @IsOptional()
  @IsString()
  pan?: string;

  @ApiPropertyOptional({ example: 'MUMA12345A' })
  @IsOptional()
  @IsString()
  tan?: string;

  @ApiPropertyOptional({ example: '27AAACA1234A1Z5' })
  @IsOptional()
  @IsString()
  gstin?: string;

  @ApiPropertyOptional({ example: 'MH/BAN/123456' })
  @IsOptional()
  @IsString()
  pfNumber?: string;

  @ApiPropertyOptional({ example: '31000123450001001' })
  @IsOptional()
  @IsString()
  esiNumber?: string;
}

// Step 3: Locations
export class WizardLocationDto {
  @ApiProperty({ example: 'Mumbai Head Office' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'MUM01' })
  @IsString()
  code: string;

  @ApiProperty({ example: '123 Business Park, Andheri East' })
  @IsString()
  address: string;

  @ApiProperty({ example: 'Maharashtra' })
  @IsString()
  state: string;

  @ApiProperty({ example: '400069' })
  @IsString()
  pincode: string;

  @ApiProperty({ example: 'Asia/Kolkata' })
  @IsString()
  timezone: string;

  @ApiPropertyOptional({ example: 19.1197 })
  @IsOptional()
  @Type(() => Number)
  latitude?: number;

  @ApiPropertyOptional({ example: 72.9056 })
  @IsOptional()
  @Type(() => Number)
  longitude?: number;

  @ApiPropertyOptional({ example: 500, description: 'Geofence radius in meters (50-2000)' })
  @IsOptional()
  @Type(() => Number)
  @Min(50)
  @Max(2000)
  geofenceRadius?: number;
}

export class WizardStep3LocationsDto {
  @ApiProperty({ type: [WizardLocationDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WizardLocationDto)
  locations: WizardLocationDto[];
}

// Step 4: Departments
export class WizardDepartmentDto {
  @ApiProperty({ example: 'Engineering' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'ENG' })
  @IsString()
  code: string;

  @ApiPropertyOptional({ example: 'Software development team' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Parent department ID for hierarchy' })
  @IsOptional()
  @IsUUID()
  parentDepartmentId?: string;

  @ApiPropertyOptional({ description: 'Department head employee ID (after employees created)' })
  @IsOptional()
  @IsUUID()
  headEmployeeId?: string;
}

export class WizardStep4DepartmentsDto {
  @ApiProperty({ type: [WizardDepartmentDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WizardDepartmentDto)
  departments: WizardDepartmentDto[];
}

// Step 5: Work Policy (Attendance Policy)
export class WizardStep5WorkPolicyDto {
  @ApiProperty({ example: 15, description: 'Grace minutes for late arrival' })
  @IsInt()
  @Min(0)
  @Max(120)
  graceMinutes: number;

  @ApiProperty({ example: 15, description: 'Late mark threshold in minutes' })
  @IsInt()
  @Min(0)
  @Max(240)
  lateMarkThresholdMinutes: number;

  @ApiProperty({ example: 240, description: 'Half day threshold in minutes' })
  @IsInt()
  @Min(60)
  @Max(480)
  halfDayThresholdMinutes: number;

  @ApiProperty({ example: 480, description: 'Full day threshold in minutes' })
  @IsInt()
  @Min(240)
  @Max(600)
  fullDayThresholdMinutes: number;

  @ApiProperty({ example: 120, description: 'Allowed punch window in minutes before/after shift' })
  @IsInt()
  @Min(0)
  @Max(480)
  allowedPunchWindowMinutes: number;

  @ApiProperty({ example: ['WEB', 'MOBILE_GPS'], enum: ['WEB', 'MOBILE_GPS', 'BIOMETRIC', 'KIOSK'] })
  @IsArray()
  @IsString({ each: true })
  captureModes: string[];

  @ApiProperty({ example: 'FLAG', enum: ['FLAG', 'BLOCK'] })
  @IsString()
  geofenceAction: 'FLAG' | 'BLOCK';

  @ApiProperty({ example: true })
  @IsBoolean()
  overtimeEnabled: boolean;

  @ApiProperty({ example: 30, description: 'OT threshold in minutes beyond shift end' })
  @IsInt()
  @Min(0)
  @Max(480)
  overtimeThresholdMinutes: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  overtimeRequiresApproval: boolean;

  @ApiPropertyOptional({ example: { enabled: true, marksPerMonth: 3, deductionDays: 0.5 } })
  @IsOptional()
  @IsObject()
  lateMarkPolicy?: Record<string, unknown>;
}

// Step 6: Leave Types
export class WizardLeaveTypeDto {
  @ApiProperty({ example: 'ANNUAL' })
  @IsString()
  code: string;

  @ApiProperty({ example: 'Annual Leave' })
  @IsString()
  name: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isPaid: boolean;

  @ApiProperty({ example: '#3B82F6' })
  @IsString()
  color: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  requiresAttachment: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  halfDayAllowed: boolean;

  @ApiProperty({ example: 1 })
  @IsInt()
  sortOrder: number;
}

export class WizardStep6LeaveDto {
  @ApiProperty({ type: [WizardLeaveTypeDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WizardLeaveTypeDto)
  leaveTypes: WizardLeaveTypeDto[];
}

// Step 7: Invite Users
export class WizardInviteUserDto {
  @ApiProperty({ example: 'john.doe@acme.com' })
  @IsString()
  email: string;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'EMP', enum: ['OA', 'HR', 'MGR', 'EMP'] })
  @IsString()
  roleCode: string;

  @ApiPropertyOptional({ example: 'ORGANIZATION' })
  @IsOptional()
  @IsString()
  scopeType?: string;
}

export class WizardStep7InviteUsersDto {
  @ApiProperty({ type: [WizardInviteUserDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WizardInviteUserDto)
  users: WizardInviteUserDto[];
}

// Main step DTO with discriminated union
export class SetupWizardStepDto {
  @ApiProperty({ enum: ['profile', 'legal_entity', 'locations', 'departments', 'work_policy', 'leave', 'invite_users'] })
  @IsString()
  step: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  data?: Record<string, unknown>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  complete?: boolean;
}

export type WizardStepData =
  | WizardStep1ProfileDto
  | WizardStep2LegalEntityDto
  | WizardStep3LocationsDto
  | WizardStep4DepartmentsDto
  | WizardStep5WorkPolicyDto
  | WizardStep6LeaveDto
  | WizardStep7InviteUsersDto;
