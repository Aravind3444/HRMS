// ─── Tenant & Subscription ────────────────────────────────────────────────────
export type TenantStatus = 'pending_review' | 'active' | 'suspended' | 'cancelled' | 'archived';
export type SubscriptionStatus = 'pending' | 'trial' | 'active' | 'past_due' | 'suspended' | 'cancelled' | 'expired';

// ─── IAM ──────────────────────────────────────────────────────────────────────
export type MembershipStatus = 'pending' | 'active' | 'suspended' | 'revoked';
export type ScopeType =
  | 'SELF' | 'TEAM' | 'TEAM_TREE' | 'DEPARTMENT'
  | 'LOCATION' | 'LEGAL_ENTITY' | 'ORGANIZATION' | 'ASSIGNED' | 'PLATFORM';

// ─── Employee ─────────────────────────────────────────────────────────────────
export type EmployeeStatus =
  | 'prehire' | 'active' | 'on_probation' | 'on_notice'
  | 'long_leave' | 'inactive' | 'terminated';
export type EmploymentType = 'full_time' | 'part_time' | 'contract' | 'intern' | 'consultant';
export type FieldClass = 'public' | 'internal' | 'sensitive' | 'restricted';
export type Gender = 'male' | 'female' | 'other' | 'prefer_not_to_say';
export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | 'unknown';
export type MaritalStatus = 'single' | 'married' | 'divorced' | 'widowed' | 'other';
export type AccountType = 'SAVINGS' | 'CURRENT' | 'SALARY';

export interface EmployeeDto {
  id: string;
  tenantId: string;
  userId: string;
  legalEntityId: string;
  locationId?: string | null;
  departmentId?: string | null;
  designationId?: string | null;
  gradeId?: string | null;
  costCenterId?: string | null;
  employmentTypeId?: string | null;
  employeeCode: string;
  employeeType: string;
  name: string;
  dateOfJoining: string;
  dateOfBirth?: string | null;
  gender?: string | null;
  bloodGroup?: string | null;
  maritalStatus?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  pincode?: string | null;
  country?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  emergencyContactName?: string | null;
  emergencyContactPhone?: string | null;
  emergencyContactRelation?: string | null;
  panNumber?: string | null;
  aadhaarNumber?: string | null;
  bankAccountNumber?: string | null;
  bankName?: string | null;
  bankBranch?: string | null;
  bankIFSC?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  legalEntity?: { id: string; name: string; code: string };
  location?: { id: string; name: string; code: string } | null;
  department?: { id: string; name: string; code: string } | null;
  designation?: { id: string; name: string; code: string } | null;
  grade?: { id: string; name: string; code: string } | null;
  costCenter?: { id: string; name: string; code: string } | null;
  employmentType?: { id: string; name: string; code: string } | null;
  user?: { id: string; email: string; fullName: string; phoneNumber?: string | null };
  employeeDocuments?: EmployeeDocumentDto[];
  employeeEmergencyContacts?: EmployeeEmergencyContactDto[];
  employeeBankDetails?: EmployeeBankDetailDto[];
  employeeTaxInfos?: EmployeeTaxInfoDto[];
}

export interface EmployeeCreateRequest {
  userId: string;
  legalEntityId: string;
  locationId?: string;
  departmentId?: string;
  designationId?: string;
  gradeId?: string;
  costCenterId?: string;
  employmentTypeId?: string;
  code: string;
  employeeType: string;
  name: string;
  email?: string;
  phoneNumber?: string;
  dateOfJoining?: string;
  dateOfBirth?: string;
  gender?: Gender;
  bloodGroup?: BloodGroup;
  maritalStatus?: MaritalStatus;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  country?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  emergencyContactRelation?: string;
  panNumber?: string;
  aadhaarNumber?: string;
  bankAccountNumber?: string;
  bankName?: string;
  bankBranch?: string;
  bankIFSC?: string;
}

export interface EmployeeUpdateRequest {
  code?: string;
  name?: string;
  description?: string;
  departmentId?: string;
  designationId?: string;
  gradeId?: string;
  costCenterId?: string;
  employmentTypeId?: string;
  legalEntityId?: string;
  locationId?: string;
  isActive?: boolean;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  country?: string;
  dateOfJoining?: string;
  dateOfBirth?: string;
  gender?: Gender;
  bloodGroup?: BloodGroup;
  maritalStatus?: MaritalStatus;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  emergencyContactRelation?: string;
  panNumber?: string;
  aadhaarNumber?: string;
  bankAccountNumber?: string;
  bankName?: string;
  bankBranch?: string;
  bankIFSC?: string;
}

export interface EmployeeDocumentDto {
  id: string;
  employeeId: string;
  tenantId: string;
  documentType: string;
  documentName: string;
  fileUrl: string;
  fileSize?: number | null;
  uploadedAt: string;
  expiryDate?: string | null;
  isActive: boolean;
}

export interface EmployeeDocumentCreateRequest {
  documentType: string;
  documentName: string;
  fileUrl: string;
  fileSize?: number;
  expiryDate?: string;
}

export interface EmployeeEmergencyContactDto {
  id: string;
  employeeId: string;
  tenantId: string;
  name: string;
  relationship: string;
  phone: string;
  email?: string | null;
  isPrimary: boolean;
  createdAt: string;
}

export interface EmployeeEmergencyContactCreateRequest {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
  isPrimary?: boolean;
}

export interface EmployeeBankDetailDto {
  id: string;
  employeeId: string;
  tenantId: string;
  bankName: string;
  branchName: string;
  accountNumber: string;
  ifscCode: string;
  accountType: string;
  isPrimary: boolean;
  isVerified: boolean;
  createdAt: string;
}

export interface EmployeeBankDetailCreateRequest {
  bankName: string;
  branchName: string;
  accountNumber: string;
  ifscCode: string;
  accountType?: AccountType;
  isPrimary?: boolean;
}

export interface EmployeeTaxInfoDto {
  id: string;
  employeeId: string;
  tenantId: string;
  panNumber?: string | null;
  aadhaarNumber?: string | null;
  uanNumber?: string | null;
  bankAccountNumber?: string | null;
  bankName?: string | null;
  bankIFSC?: string | null;
  taxSlab?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeTaxInfoCreateRequest {
  panNumber?: string;
  aadhaarNumber?: string;
  uanNumber?: string;
  bankAccountNumber?: string;
  bankName?: string;
  bankIFSC?: string;
  taxSlab?: string;
}

export interface EmployeeListFilters {
  departmentId?: string;
  designationId?: string;
  gradeId?: string;
  employmentTypeId?: string;
  isActive?: boolean;
  search?: string;
}

// ─── Attendance ───────────────────────────────────────────────────────────────
export type PunchType = 'CHECK_IN' | 'BREAK_START' | 'BREAK_END' | 'CHECK_OUT';
export type PunchSource = 'web' | 'mobile' | 'biometric' | 'kiosk' | 'correction';
export type AttendanceDayStatus =
  | 'present' | 'absent' | 'half_day' | 'on_leave'
  | 'holiday' | 'weekly_off' | 'on_duty' | 'work_from_home' | 'missing_punch';

// ─── Leave ────────────────────────────────────────────────────────────────────
export type LeaveApplicationStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';
export type LeaveLedgerEntryType =
  | 'opening' | 'accrual' | 'reservation' | 'reservation_release'
  | 'deduction' | 'adjustment' | 'encashment' | 'lapse' | 'carry_forward';

// ─── Payroll ──────────────────────────────────────────────────────────────────
export type PayrollRunStatus =
  | 'draft' | 'inputs_locked' | 'calculated' | 'validation_failed'
  | 'pending_approval' | 'approved' | 'locked' | 'payment_initiated'
  | 'paid' | 'partially_paid' | 'reconciled' | 'closed';
export type PayrollComponentCategory =
  | 'earning' | 'employee_deduction' | 'employer_contribution' | 'reimbursement' | 'informational';

// ─── Documents ────────────────────────────────────────────────────────────────
export type FileScanStatus = 'pending' | 'quarantined' | 'clean' | 'infected';
export type DocumentStatus = 'pending_verification' | 'verified' | 'rejected' | 'expired';

// ─── Workflow ─────────────────────────────────────────────────────────────────
export type WorkflowInstanceStatus = 'pending' | 'in_progress' | 'approved' | 'rejected' | 'cancelled';
export type WorkflowTaskStatus = 'pending' | 'approved' | 'rejected' | 'escalated' | 'delegated' | 'expired';
export type ApproverType = 'reporting_manager' | 'department_head' | 'role_holder' | 'named_user' | 'dynamic_field';
export type StepMode = 'any_one' | 'all' | 'quorum';

// ─── Notifications ────────────────────────────────────────────────────────────
export type NotificationChannel = 'in_app' | 'email' | 'sms' | 'whatsapp' | 'push';
export type DeliveryStatus = 'pending' | 'processing' | 'processed' | 'failed' | 'dead_lettered';

// ─── Audit ────────────────────────────────────────────────────────────────────
export type AuditSource = 'api' | 'worker' | 'system' | 'break_glass' | 'import';

// ─── Asset ────────────────────────────────────────────────────────────────────
export type AssetStatus = 'in_stock' | 'allocated' | 'returned' | 'under_repair' | 'retired' | 'lost';

// ─── API Response envelope ────────────────────────────────────────────────────
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    fieldErrors?: FieldError[];
    correlationId: string;
    retryable: boolean;
  };
  meta?: {
    cursor?: string;
    hasMore?: boolean;
    total?: number;
  };
}

export interface FieldError {
  field: string;
  message: string;
  code: string;
}

export interface CursorPage<T> {
  items: T[];
  cursor: string | null;
  hasMore: boolean;
}

export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

export type UUID = string;
export type ISODateString = string;
export type Decimal = string; // Money – always string from API, never float

export interface LoginRequest {
  email: string;
  password: string;
}

export interface TenantSignupRequest {
  companyName: string;
  companySlug: string;
  adminFullName: string;
  adminEmail: string;
  adminPassword: string;
  adminPhoneNumber?: string;
}

export interface AuthUserDto {
  id: string;
  email: string;
  fullName: string;
  isPlatformAdmin?: boolean;
  activeTenant?: {
    id: string;
    name: string;
    slug: string;
    status: string;
    membershipId: string;
    roles: string[];
    permissions: string[];
  } | null;
}
