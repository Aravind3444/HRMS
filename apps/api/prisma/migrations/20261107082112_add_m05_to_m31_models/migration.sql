-- CreateTable
CREATE TABLE "employee_profiles" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "father_name" VARCHAR(255),
    "mother_name" VARCHAR(255),
    "spouse_name" VARCHAR(255),
    "nationality" VARCHAR(100),
    "religion" VARCHAR(100),
    "passport_no" VARCHAR(50),
    "license_no" VARCHAR(50),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "employee_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_family" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "relation" VARCHAR(100) NOT NULL,
    "dob" TIMESTAMPTZ,
    "occupation" VARCHAR(255),
    "is_dependent" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_family_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_education" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "degree" VARCHAR(255) NOT NULL,
    "institution" VARCHAR(255) NOT NULL,
    "field_of_study" VARCHAR(255),
    "start_year" INTEGER,
    "end_year" INTEGER,
    "grade" VARCHAR(50),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_experience" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "company_name" VARCHAR(255) NOT NULL,
    "designation" VARCHAR(255) NOT NULL,
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ,
    "is_current" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_types" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "requires_expiry" BOOLEAN NOT NULL DEFAULT false,
    "max_file_size" INTEGER,
    "allowed_types" TEXT,
    "is_mandatory" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "document_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_documents" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "document_type_id" UUID NOT NULL,
    "document_name" VARCHAR(255) NOT NULL,
    "file_url" TEXT NOT NULL,
    "file_size" INTEGER,
    "version" INTEGER NOT NULL DEFAULT 1,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "company_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_templates" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "template_type" VARCHAR(50) NOT NULL,
    "body_html" TEXT,
    "variables_json" JSONB NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "document_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "policy_documents" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "effective_from" TIMESTAMPTZ NOT NULL,
    "effective_to" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "policy_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requisitions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "department_id" UUID NOT NULL,
    "designation_id" UUID NOT NULL,
    "grade_id" UUID,
    "headcount" INTEGER NOT NULL DEFAULT 1,
    "budget" DECIMAL(12,2),
    "justification" TEXT,
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "requisitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "requisition_id" UUID,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT,
    "location_id" UUID,
    "employment_type" VARCHAR(50) NOT NULL,
    "salary_min" DECIMAL(12,2),
    "salary_max" DECIMAL(12,2),
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "is_internal" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidates" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20),
    "resume_url" TEXT,
    "source" VARCHAR(100),
    "status" VARCHAR(50) NOT NULL DEFAULT 'APPLIED',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "candidates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interviews" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "candidate_id" UUID NOT NULL,
    "job_id" UUID,
    "stage" VARCHAR(100) NOT NULL,
    "scheduled_at" TIMESTAMPTZ NOT NULL,
    "duration_mins" INTEGER NOT NULL DEFAULT 30,
    "location" VARCHAR(255),
    "meeting_link" TEXT,
    "status" VARCHAR(50) NOT NULL DEFAULT 'SCHEDULED',
    "feedback" TEXT,
    "rating" INTEGER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "interviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "offers" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "candidate_id" UUID NOT NULL,
    "job_id" UUID,
    "position" VARCHAR(255) NOT NULL,
    "department" VARCHAR(255),
    "grade" VARCHAR(100),
    "salary" DECIMAL(12,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'INR',
    "joining_date" TIMESTAMPTZ NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "offer_letter_url" TEXT,
    "sent_at" TIMESTAMPTZ,
    "responded_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "offers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "referrals" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "candidate_id" UUID NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "bonus_amount" DECIMAL(12,2),
    "bonus_paid" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "referrals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "onboarding_templates" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "entityType" VARCHAR(50) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "onboarding_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "onboarding_tasks" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "template_id" UUID,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "assignee_role" VARCHAR(100) NOT NULL,
    "offset_days" INTEGER NOT NULL DEFAULT 0,
    "is_mandatory" BOOLEAN NOT NULL DEFAULT true,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "onboarding_tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "onboarding_cases" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'IN_PROGRESS',
    "started_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "onboarding_cases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "onboarding_case_tasks" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "case_id" UUID NOT NULL,
    "template_task_id" UUID,
    "title" VARCHAR(255) NOT NULL,
    "assignee_role" VARCHAR(100) NOT NULL,
    "assignee_user_id" UUID,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "due_date" TIMESTAMPTZ,
    "completed_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "onboarding_case_tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resignations" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "reason" TEXT NOT NULL,
    "proposed_last_day" TIMESTAMPTZ NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'SUBMITTED',
    "notice_period" INTEGER,
    "waived" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "resignations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "terminations" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "reason" TEXT NOT NULL,
    "effective_date" TIMESTAMPTZ NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "terminations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clearance_checklist" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "termination_id" UUID NOT NULL,
    "department" VARCHAR(100) NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "comments" TEXT,
    "cleared_by_id" UUID,
    "cleared_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "clearance_checklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exit_interviews" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "interviewer_id" UUID,
    "scheduled_at" TIMESTAMPTZ,
    "conducted_at" TIMESTAMPTZ,
    "feedback" TEXT,
    "rating" INTEGER,
    "is_confidential" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "exit_interviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance_days" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "work_date" TIMESTAMPTZ NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "check_in" TIMESTAMPTZ,
    "check_out" TIMESTAMPTZ,
    "total_mins" INTEGER,
    "late_mins" INTEGER,
    "overtime_mins" INTEGER,
    "is_corrected" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "attendance_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "punches" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "punch_type" VARCHAR(20) NOT NULL,
    "punch_time" TIMESTAMPTZ NOT NULL,
    "source" VARCHAR(20) NOT NULL DEFAULT 'WEB',
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "accuracy" DOUBLE PRECISION,
    "photo_url" TEXT,
    "ip_address" VARCHAR(45),
    "device_id" VARCHAR(100),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "punches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "overtime" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "work_date" TIMESTAMPTZ NOT NULL,
    "start_time" TIMESTAMPTZ NOT NULL,
    "end_time" TIMESTAMPTZ NOT NULL,
    "total_mins" INTEGER NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "reason" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "overtime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regularizations" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "work_date" TIMESTAMPTZ NOT NULL,
    "requested_in" TIMESTAMPTZ,
    "requested_out" TIMESTAMPTZ,
    "reason" TEXT NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "approved_by_id" UUID,
    "approved_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "regularizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shift_templates" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "start_time" VARCHAR(10) NOT NULL,
    "end_time" VARCHAR(10) NOT NULL,
    "break_mins" INTEGER NOT NULL DEFAULT 30,
    "grace_mins" INTEGER NOT NULL DEFAULT 15,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "shift_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rosters" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "shift_id" UUID,
    "work_date" TIMESTAMPTZ NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PUBLISHED',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "rosters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shift_swaps" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "from_employee_id" UUID NOT NULL,
    "to_employee_id" UUID NOT NULL,
    "work_date" TIMESTAMPTZ NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "reason" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "shift_swaps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_policies" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "leave_type_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "annual_limit" INTEGER NOT NULL,
    "probation_eligible" BOOLEAN NOT NULL DEFAULT false,
    "carry_forward" INTEGER NOT NULL DEFAULT 0,
    "encashable" BOOLEAN NOT NULL DEFAULT false,
    "half_day_allowed" BOOLEAN NOT NULL DEFAULT true,
    "notice_period" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "leave_policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_applications" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "leave_type_id" UUID NOT NULL,
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ NOT NULL,
    "half_day" BOOLEAN NOT NULL DEFAULT false,
    "half_day_session" VARCHAR(20),
    "reason" TEXT NOT NULL,
    "attachment_url" TEXT,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "applied_on" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "decided_by_id" UUID,
    "decided_at" TIMESTAMPTZ,
    "decision_reason" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "leave_applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_ledger" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "leave_type_id" UUID NOT NULL,
    "entry_type" VARCHAR(50) NOT NULL,
    "quantity" DECIMAL(6,2) NOT NULL,
    "effective_date" TIMESTAMPTZ NOT NULL,
    "reference_id" UUID,
    "reference_type" VARCHAR(50),
    "notes" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leave_ledger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comp_off" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "work_date" TIMESTAMPTZ NOT NULL,
    "hours" DECIMAL(4,2) NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "expiry_date" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "comp_off_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payroll_components" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "is_taxable" BOOLEAN NOT NULL DEFAULT false,
    "is_pf_applicable" BOOLEAN NOT NULL DEFAULT false,
    "is_esi_applicable" BOOLEAN NOT NULL DEFAULT false,
    "rounding_rule" TEXT NOT NULL DEFAULT 'NEAREST',
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "payroll_components_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salary_structures" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "grade_id" UUID,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'INR',
    "components_json" JSONB NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "salary_structures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_compensation" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "structure_id" UUID,
    "ctc" DECIMAL(12,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'INR',
    "effective_from" TIMESTAMPTZ NOT NULL,
    "effective_to" TIMESTAMPTZ,
    "components_json" JSONB NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "employee_compensation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payroll_periods" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ NOT NULL,
    "pay_date" TIMESTAMPTZ NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "payroll_periods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payroll_runs" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "period_id" UUID NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "total_gross" DECIMAL(15,2),
    "total_deduction" DECIMAL(15,2),
    "total_net" DECIMAL(15,2),
    "employeeCount" INTEGER NOT NULL DEFAULT 0,
    "calculated_at" TIMESTAMPTZ,
    "approved_by_id" UUID,
    "approved_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "payroll_runs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payslips" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "run_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "gross_pay" DECIMAL(12,2) NOT NULL,
    "total_deduction" DECIMAL(12,2) NOT NULL,
    "net_pay" DECIMAL(12,2) NOT NULL,
    "components_json" JSONB NOT NULL,
    "pdf_url" TEXT,
    "is_published" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "payslips_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loans" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "principal" DECIMAL(12,2) NOT NULL,
    "interest_rate" DECIMAL(5,2),
    "emi_amount" DECIMAL(10,2) NOT NULL,
    "total_emis" INTEGER NOT NULL,
    "paid_emis" INTEGER NOT NULL DEFAULT 0,
    "outstanding" DECIMAL(12,2) NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "loans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fnf" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "termination_id" UUID,
    "last_working_day" TIMESTAMPTZ NOT NULL,
    "full_and_final_amount" DECIMAL(12,2) NOT NULL,
    "deductions" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "net_payable" DECIMAL(12,2) NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "fnf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statutory_rule_sets" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "wage_ceiling" DECIMAL(12,2),
    "employee_rate" DECIMAL(5,4),
    "employer_rate" DECIMAL(5,4),
    "effective_from" TIMESTAMPTZ NOT NULL,
    "effective_to" TIMESTAMPTZ,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "statutory_rule_sets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pf_contributions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "period" VARCHAR(10) NOT NULL,
    "wage" DECIMAL(10,2) NOT NULL,
    "employee_share" DECIMAL(10,2) NOT NULL,
    "employer_share" DECIMAL(10,2) NOT NULL,
    "epf_share" DECIMAL(10,2),
    "eps_share" DECIMAL(10,2),
    "edli_share" DECIMAL(10,2),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pf_contributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "esi_contributions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "period" VARCHAR(10) NOT NULL,
    "wage" DECIMAL(10,2) NOT NULL,
    "employee_share" DECIMAL(10,2) NOT NULL,
    "employer_share" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "esi_contributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pt_contributions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "period" VARCHAR(10) NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "state" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pt_contributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lwf_contributions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "period" VARCHAR(10) NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "state" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lwf_contributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investment_declarations" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "financial_year" VARCHAR(10) NOT NULL,
    "regime" VARCHAR(20) NOT NULL DEFAULT 'NEW',
    "section_80c" DECIMAL(10,2),
    "section_80d" DECIMAL(10,2),
    "section_80ccd_1b" DECIMAL(10,2),
    "hra_claimed" DECIMAL(10,2),
    "home_loan_interest" DECIMAL(10,2),
    "other_deductions" DECIMAL(10,2),
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "submitted_at" TIMESTAMPTZ,
    "verified_by_id" UUID,
    "verified_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "investment_declarations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proof_submissions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "declaration_id" UUID NOT NULL,
    "section_code" VARCHAR(50) NOT NULL,
    "file_url" TEXT NOT NULL,
    "amount" DECIMAL(10,2),
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "verified_by_id" UUID,
    "verified_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "proof_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tds_computations" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "financial_year" VARCHAR(10) NOT NULL,
    "month" VARCHAR(10) NOT NULL,
    "gross_salary" DECIMAL(10,2) NOT NULL,
    "deductions" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "taxable_income" DECIMAL(10,2) NOT NULL,
    "tds_amount" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "cess_amount" DECIMAL(10,2),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tds_computations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_16" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "financial_year" VARCHAR(10) NOT NULL,
    "pdf_url" TEXT,
    "part_ab_data" JSONB NOT NULL,
    "part_b_data" JSONB NOT NULL,
    "generated_at" TIMESTAMPTZ,
    "published_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "form_16_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_24q" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "quarter" VARCHAR(10) NOT NULL,
    "financial_year" VARCHAR(10) NOT NULL,
    "pdf_url" TEXT,
    "data_json" JSONB NOT NULL,
    "filed_at" TIMESTAMPTZ,
    "acknowledgment_no" VARCHAR(50),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "form_24q_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compliance_calendar" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "statute_code" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "due_date" TIMESTAMPTZ NOT NULL,
    "period" VARCHAR(20) NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "remitted_amount" DECIMAL(12,2),
    "challan_no" VARCHAR(50),
    "filed_by_id" UUID,
    "filed_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "compliance_calendar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review_cycles" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "cycleType" VARCHAR(50) NOT NULL,
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "review_cycles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "cycle_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "reviewer_id" UUID NOT NULL,
    "reviewType" VARCHAR(50) NOT NULL,
    "overall_rating" DECIMAL(3,2),
    "comments" TEXT,
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "submitted_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "goals" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "cycle_id" UUID,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "type" VARCHAR(50) NOT NULL,
    "weightage" INTEGER NOT NULL DEFAULT 100,
    "target_value" DECIMAL(10,2),
    "current_value" DECIMAL(10,2),
    "unit" VARCHAR(50),
    "due_date" TIMESTAMPTZ,
    "status" VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    "progressPct" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "goals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "check_ins" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "manager_id" UUID,
    "check_in_date" TIMESTAMPTZ NOT NULL,
    "notes" TEXT,
    "agreed_actions" TEXT,
    "rating" INTEGER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "check_ins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedback" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "reviewer_id" UUID NOT NULL,
    "reviewee_id" UUID NOT NULL,
    "cycle_id" UUID,
    "type" VARCHAR(50) NOT NULL,
    "is_anonymous" BOOLEAN NOT NULL DEFAULT false,
    "comments" TEXT NOT NULL,
    "rating" INTEGER,
    "is_released" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calibrations" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "cycle_id" UUID NOT NULL,
    "department_id" UUID,
    "name" VARCHAR(255) NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "calibrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pips" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "manager_id" UUID NOT NULL,
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ NOT NULL,
    "objectives" TEXT NOT NULL,
    "improvement_plan" TEXT NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    "outcome" VARCHAR(50),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "pips_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "type" VARCHAR(50) NOT NULL,
    "content_url" TEXT,
    "duration_mins" INTEGER NOT NULL DEFAULT 0,
    "category" VARCHAR(100),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enrollments" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "course_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'ENROLLED',
    "progressPct" INTEGER NOT NULL DEFAULT 0,
    "started_at" TIMESTAMPTZ,
    "completed_at" TIMESTAMPTZ,
    "score" INTEGER,
    "certificate_url" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "enrollments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assessments" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "course_id" UUID,
    "title" VARCHAR(255) NOT NULL,
    "passMark" INTEGER NOT NULL DEFAULT 70,
    "maxAttempts" INTEGER NOT NULL DEFAULT 3,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "assessments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certifications" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "course_id" UUID NOT NULL,
    "certificate_no" VARCHAR(100) NOT NULL,
    "issued_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiry_date" TIMESTAMPTZ,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "certifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "training_requests" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "training_name" VARCHAR(255) NOT NULL,
    "provider" VARCHAR(255),
    "start_date" TIMESTAMPTZ,
    "end_date" TIMESTAMPTZ,
    "budget" DECIMAL(12,2),
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "applied_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "training_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report_templates" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(100) NOT NULL,
    "config_json" JSONB NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "report_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report_executions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "template_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "parameters_json" JSONB,
    "result_url" TEXT,
    "fileFormat" VARCHAR(20) NOT NULL DEFAULT 'PDF',
    "row_count" INTEGER,
    "started_at" TIMESTAMPTZ,
    "completed_at" TIMESTAMPTZ,
    "error_message" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "report_executions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_principal_requests" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "request_type" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "due_date" TIMESTAMPTZ NOT NULL,
    "completed_at" TIMESTAMPTZ,
    "response_url" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "data_principal_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login_history" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "ip_address" VARCHAR(45),
    "user_agent" TEXT,
    "login_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "logout_at" TIMESTAMPTZ,
    "is_successful" BOOLEAN NOT NULL DEFAULT true,
    "failure_reason" TEXT,

    CONSTRAINT "login_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webhook_subscriptions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "events" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "secret" VARCHAR(255) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "webhook_subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webhook_deliveries" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "subscription_id" UUID NOT NULL,
    "event_type" VARCHAR(100) NOT NULL,
    "payload_json" JSONB NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "response_code" INTEGER,
    "response_body" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "webhook_deliveries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "api_keys" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "key_prefix" VARCHAR(20) NOT NULL,
    "key_hash" VARCHAR(255) NOT NULL,
    "scopes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "last_used_at" TIMESTAMPTZ,
    "expires_at" TIMESTAMPTZ,
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "security_events" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "user_id" UUID,
    "event_type" VARCHAR(100) NOT NULL,
    "ip_address" VARCHAR(45),
    "user_agent" TEXT,
    "details_json" JSONB,
    "severity" VARCHAR(20) NOT NULL DEFAULT 'MEDIUM',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "security_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encryption_keys" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "key_name" VARCHAR(100) NOT NULL,
    "key_version" INTEGER NOT NULL DEFAULT 1,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rotated_at" TIMESTAMPTZ,

    CONSTRAINT "encryption_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "import_jobs" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "entity_type" VARCHAR(100) NOT NULL,
    "file_url" TEXT NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "totalRows" INTEGER NOT NULL DEFAULT 0,
    "successRows" INTEGER NOT NULL DEFAULT 0,
    "errorRows" INTEGER NOT NULL DEFAULT 0,
    "error_log_url" TEXT,
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMPTZ,

    CONSTRAINT "import_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "export_jobs" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "entity_type" VARCHAR(100) NOT NULL,
    "file_url" TEXT,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "rowCount" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMPTZ,
    "expires_at" TIMESTAMPTZ,

    CONSTRAINT "export_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chart_of_accounts" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "parent_id" UUID,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "chart_of_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fiscal_periods" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'OPEN',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "fiscal_periods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "journal_entries" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "entry_number" VARCHAR(50) NOT NULL,
    "entry_date" TIMESTAMPTZ NOT NULL,
    "reference" VARCHAR(255),
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "total_debit" DECIMAL(15,2) NOT NULL DEFAULT 0,
    "total_credit" DECIMAL(15,2) NOT NULL DEFAULT 0,
    "approved_by_id" UUID,
    "posted_by_id" UUID,
    "posted_at" TIMESTAMPTZ,
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "journal_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "journal_lines" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "entry_id" UUID NOT NULL,
    "account_id" UUID NOT NULL,
    "description" TEXT,
    "debit_amount" DECIMAL(15,2) NOT NULL DEFAULT 0,
    "credit_amount" DECIMAL(15,2) NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "journal_lines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_conversations" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "ai_conversations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_messages" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "conversation_id" UUID NOT NULL,
    "role" VARCHAR(20) NOT NULL,
    "content" TEXT NOT NULL,
    "citations_json" JSONB,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asset_categories" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "depreciation_years" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "asset_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asset_items" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "serial_no" VARCHAR(100),
    "asset_tag" VARCHAR(100) NOT NULL,
    "purchase_date" TIMESTAMPTZ,
    "purchase_price" DECIMAL(12,2),
    "warranty_expiry" TIMESTAMPTZ,
    "status" VARCHAR(50) NOT NULL DEFAULT 'IN_STOCK',
    "condition" VARCHAR(50) NOT NULL DEFAULT 'GOOD',
    "assigned_to_id" UUID,
    "allocated_at" TIMESTAMPTZ,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "asset_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asset_requests" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "asset_id" UUID NOT NULL,
    "reason" TEXT NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "requested_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approved_by_id" UUID,
    "approved_at" TIMESTAMPTZ,
    "returned_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "asset_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asset_returns" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "asset_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "condition" VARCHAR(50) NOT NULL,
    "damage_notes" TEXT,
    "damage_charge" DECIMAL(10,2),
    "returned_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "asset_returns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_categories" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "sla_hours" INTEGER NOT NULL DEFAULT 24,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "ticket_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "helpdesk_tickets" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "category_id" UUID,
    "employee_id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "priority" VARCHAR(20) NOT NULL DEFAULT 'MEDIUM',
    "status" VARCHAR(50) NOT NULL DEFAULT 'OPEN',
    "assignee_id" UUID,
    "due_at" TIMESTAMPTZ,
    "resolved_at" TIMESTAMPTZ,
    "closed_at" TIMESTAMPTZ,
    "csatRating" INTEGER,
    "csat_comment" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "helpdesk_tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_comments" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "ticket_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "comment" TEXT NOT NULL,
    "is_internal" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "ticket_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "knowledge_base" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "category" VARCHAR(100),
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "is_published" BOOLEAN NOT NULL DEFAULT false,
    "view_count" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "knowledge_base_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense_policies" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "category" VARCHAR(100) NOT NULL,
    "grade_id" UUID,
    "location_id" UUID,
    "limit_amount" DECIMAL(10,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'INR',
    "per_day_limit" DECIMAL(10,2),
    "receipt_required" BOOLEAN NOT NULL DEFAULT true,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "expense_policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense_claims" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "claim_number" VARCHAR(50) NOT NULL,
    "total_amount" DECIMAL(12,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'INR',
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "submitted_at" TIMESTAMPTZ,
    "approved_by_id" UUID,
    "approved_at" TIMESTAMPTZ,
    "paid_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "expense_claims_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense_claim_lines" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "claim_id" UUID NOT NULL,
    "category" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'INR',
    "expense_date" TIMESTAMPTZ NOT NULL,
    "receipt_url" TEXT,
    "is_duplicate" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "expense_claim_lines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense_advances" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'INR',
    "purpose" TEXT NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "requested_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approved_by_id" UUID,
    "settled_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "expense_advances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travel_policies" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "grade_id" UUID,
    "class" VARCHAR(50) NOT NULL,
    "max_per_day" DECIMAL(10,2),
    "currency" VARCHAR(3) NOT NULL DEFAULT 'INR',
    "hotel_cap" DECIMAL(10,2),
    "per_diem" DECIMAL(10,2),
    "mileage_rate" DECIMAL(10,4),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "travel_policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travel_requests" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "purpose" TEXT NOT NULL,
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ NOT NULL,
    "destination" VARCHAR(255) NOT NULL,
    "estimated_cost" DECIMAL(12,2),
    "currency" VARCHAR(3) NOT NULL DEFAULT 'INR',
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "submitted_at" TIMESTAMPTZ,
    "approved_by_id" UUID,
    "approved_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "travel_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travel_bookings" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "request_id" UUID NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "provider" VARCHAR(100),
    "booking_ref" VARCHAR(100),
    "amount" DECIMAL(10,2),
    "currency" VARCHAR(3) NOT NULL DEFAULT 'INR',
    "travel_date" TIMESTAMPTZ,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "travel_bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "announcements" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "author_id" UUID NOT NULL,
    "is_pinned" BOOLEAN NOT NULL DEFAULT false,
    "is_mandatory" BOOLEAN NOT NULL DEFAULT false,
    "publish_from" TIMESTAMPTZ NOT NULL,
    "publish_to" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "announcements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "announcement_reads" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "announcement_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "read_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "announcement_reads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "surveys" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "is_anonymous" BOOLEAN NOT NULL DEFAULT true,
    "status" VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ NOT NULL,
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "surveys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "survey_questions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "survey_id" UUID NOT NULL,
    "question" TEXT NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "options_json" JSONB,
    "is_required" BOOLEAN NOT NULL DEFAULT false,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "survey_questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "survey_responses" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "survey_id" UUID NOT NULL,
    "employee_id" UUID,
    "responses_json" JSONB NOT NULL,
    "submitted_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "survey_responses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recognitions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "giver_id" UUID NOT NULL,
    "receiver_id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,
    "value" VARCHAR(100) NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "is_public" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "recognitions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "employee_profiles_tenant_id_idx" ON "employee_profiles"("tenant_id");

-- CreateIndex
CREATE INDEX "employee_profiles_employee_id_idx" ON "employee_profiles"("employee_id");

-- CreateIndex
CREATE INDEX "employee_family_tenant_id_idx" ON "employee_family"("tenant_id");

-- CreateIndex
CREATE INDEX "employee_family_employee_id_idx" ON "employee_family"("employee_id");

-- CreateIndex
CREATE INDEX "employee_education_tenant_id_idx" ON "employee_education"("tenant_id");

-- CreateIndex
CREATE INDEX "employee_education_employee_id_idx" ON "employee_education"("employee_id");

-- CreateIndex
CREATE INDEX "employee_experience_tenant_id_idx" ON "employee_experience"("tenant_id");

-- CreateIndex
CREATE INDEX "employee_experience_employee_id_idx" ON "employee_experience"("employee_id");

-- CreateIndex
CREATE INDEX "document_types_tenant_id_idx" ON "document_types"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "document_types_tenant_id_code_key" ON "document_types"("tenant_id", "code");

-- CreateIndex
CREATE INDEX "company_documents_tenant_id_idx" ON "company_documents"("tenant_id");

-- CreateIndex
CREATE INDEX "document_templates_tenant_id_idx" ON "document_templates"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "document_templates_tenant_id_code_key" ON "document_templates"("tenant_id", "code");

-- CreateIndex
CREATE INDEX "policy_documents_tenant_id_idx" ON "policy_documents"("tenant_id");

-- CreateIndex
CREATE INDEX "requisitions_tenant_id_idx" ON "requisitions"("tenant_id");

-- CreateIndex
CREATE INDEX "requisitions_status_idx" ON "requisitions"("status");

-- CreateIndex
CREATE INDEX "jobs_tenant_id_idx" ON "jobs"("tenant_id");

-- CreateIndex
CREATE INDEX "jobs_status_idx" ON "jobs"("status");

-- CreateIndex
CREATE INDEX "candidates_tenant_id_idx" ON "candidates"("tenant_id");

-- CreateIndex
CREATE INDEX "candidates_email_idx" ON "candidates"("email");

-- CreateIndex
CREATE INDEX "candidates_status_idx" ON "candidates"("status");

-- CreateIndex
CREATE INDEX "interviews_tenant_id_idx" ON "interviews"("tenant_id");

-- CreateIndex
CREATE INDEX "interviews_candidate_id_idx" ON "interviews"("candidate_id");

-- CreateIndex
CREATE INDEX "interviews_status_idx" ON "interviews"("status");

-- CreateIndex
CREATE INDEX "offers_tenant_id_idx" ON "offers"("tenant_id");

-- CreateIndex
CREATE INDEX "offers_candidate_id_idx" ON "offers"("candidate_id");

-- CreateIndex
CREATE INDEX "offers_status_idx" ON "offers"("status");

-- CreateIndex
CREATE INDEX "referrals_tenant_id_idx" ON "referrals"("tenant_id");

-- CreateIndex
CREATE INDEX "referrals_employee_id_idx" ON "referrals"("employee_id");

-- CreateIndex
CREATE INDEX "referrals_candidate_id_idx" ON "referrals"("candidate_id");

-- CreateIndex
CREATE INDEX "onboarding_templates_tenant_id_idx" ON "onboarding_templates"("tenant_id");

-- CreateIndex
CREATE INDEX "onboarding_tasks_tenant_id_idx" ON "onboarding_tasks"("tenant_id");

-- CreateIndex
CREATE INDEX "onboarding_cases_tenant_id_idx" ON "onboarding_cases"("tenant_id");

-- CreateIndex
CREATE INDEX "onboarding_cases_employee_id_idx" ON "onboarding_cases"("employee_id");

-- CreateIndex
CREATE INDEX "onboarding_case_tasks_tenant_id_idx" ON "onboarding_case_tasks"("tenant_id");

-- CreateIndex
CREATE INDEX "onboarding_case_tasks_case_id_idx" ON "onboarding_case_tasks"("case_id");

-- CreateIndex
CREATE INDEX "resignations_tenant_id_idx" ON "resignations"("tenant_id");

-- CreateIndex
CREATE INDEX "resignations_employee_id_idx" ON "resignations"("employee_id");

-- CreateIndex
CREATE INDEX "resignations_status_idx" ON "resignations"("status");

-- CreateIndex
CREATE INDEX "terminations_tenant_id_idx" ON "terminations"("tenant_id");

-- CreateIndex
CREATE INDEX "terminations_employee_id_idx" ON "terminations"("employee_id");

-- CreateIndex
CREATE INDEX "terminations_status_idx" ON "terminations"("status");

-- CreateIndex
CREATE INDEX "clearance_checklist_tenant_id_idx" ON "clearance_checklist"("tenant_id");

-- CreateIndex
CREATE INDEX "clearance_checklist_termination_id_idx" ON "clearance_checklist"("termination_id");

-- CreateIndex
CREATE INDEX "exit_interviews_tenant_id_idx" ON "exit_interviews"("tenant_id");

-- CreateIndex
CREATE INDEX "exit_interviews_employee_id_idx" ON "exit_interviews"("employee_id");

-- CreateIndex
CREATE INDEX "attendance_days_tenant_id_work_date_idx" ON "attendance_days"("tenant_id", "work_date");

-- CreateIndex
CREATE INDEX "attendance_days_tenant_id_employee_id_idx" ON "attendance_days"("tenant_id", "employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_days_tenant_id_employee_id_work_date_key" ON "attendance_days"("tenant_id", "employee_id", "work_date");

-- CreateIndex
CREATE INDEX "punches_tenant_id_employee_id_idx" ON "punches"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "punches_tenant_id_punch_time_idx" ON "punches"("tenant_id", "punch_time");

-- CreateIndex
CREATE INDEX "overtime_tenant_id_employee_id_idx" ON "overtime"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "overtime_status_idx" ON "overtime"("status");

-- CreateIndex
CREATE INDEX "regularizations_tenant_id_employee_id_idx" ON "regularizations"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "regularizations_status_idx" ON "regularizations"("status");

-- CreateIndex
CREATE INDEX "shift_templates_tenant_id_idx" ON "shift_templates"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "shift_templates_tenant_id_code_key" ON "shift_templates"("tenant_id", "code");

-- CreateIndex
CREATE INDEX "rosters_tenant_id_work_date_idx" ON "rosters"("tenant_id", "work_date");

-- CreateIndex
CREATE UNIQUE INDEX "rosters_tenant_id_employee_id_work_date_key" ON "rosters"("tenant_id", "employee_id", "work_date");

-- CreateIndex
CREATE INDEX "shift_swaps_tenant_id_status_idx" ON "shift_swaps"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "leave_policies_tenant_id_idx" ON "leave_policies"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "leave_policies_tenant_id_leave_type_id_key" ON "leave_policies"("tenant_id", "leave_type_id");

-- CreateIndex
CREATE INDEX "leave_applications_tenant_id_employee_id_idx" ON "leave_applications"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "leave_applications_tenant_id_status_idx" ON "leave_applications"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "leave_ledger_tenant_id_employee_id_idx" ON "leave_ledger"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "leave_ledger_tenant_id_leave_type_id_idx" ON "leave_ledger"("tenant_id", "leave_type_id");

-- CreateIndex
CREATE INDEX "comp_off_tenant_id_employee_id_idx" ON "comp_off"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "comp_off_status_idx" ON "comp_off"("status");

-- CreateIndex
CREATE INDEX "payroll_components_tenant_id_idx" ON "payroll_components"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "payroll_components_tenant_id_code_key" ON "payroll_components"("tenant_id", "code");

-- CreateIndex
CREATE INDEX "salary_structures_tenant_id_idx" ON "salary_structures"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "salary_structures_tenant_id_code_key" ON "salary_structures"("tenant_id", "code");

-- CreateIndex
CREATE INDEX "employee_compensation_tenant_id_employee_id_idx" ON "employee_compensation"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "payroll_periods_tenant_id_status_idx" ON "payroll_periods"("tenant_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "payroll_periods_tenant_id_start_date_end_date_key" ON "payroll_periods"("tenant_id", "start_date", "end_date");

-- CreateIndex
CREATE INDEX "payroll_runs_tenant_id_period_id_idx" ON "payroll_runs"("tenant_id", "period_id");

-- CreateIndex
CREATE INDEX "payroll_runs_tenant_id_status_idx" ON "payroll_runs"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "payslips_tenant_id_employee_id_idx" ON "payslips"("tenant_id", "employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "payslips_tenant_id_run_id_employee_id_key" ON "payslips"("tenant_id", "run_id", "employee_id");

-- CreateIndex
CREATE INDEX "loans_tenant_id_employee_id_idx" ON "loans"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "loans_status_idx" ON "loans"("status");

-- CreateIndex
CREATE INDEX "fnf_tenant_id_employee_id_idx" ON "fnf"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "fnf_status_idx" ON "fnf"("status");

-- CreateIndex
CREATE INDEX "statutory_rule_sets_tenant_id_idx" ON "statutory_rule_sets"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "statutory_rule_sets_tenant_id_code_key" ON "statutory_rule_sets"("tenant_id", "code");

-- CreateIndex
CREATE INDEX "pf_contributions_tenant_id_period_idx" ON "pf_contributions"("tenant_id", "period");

-- CreateIndex
CREATE UNIQUE INDEX "pf_contributions_tenant_id_employee_id_period_key" ON "pf_contributions"("tenant_id", "employee_id", "period");

-- CreateIndex
CREATE INDEX "esi_contributions_tenant_id_period_idx" ON "esi_contributions"("tenant_id", "period");

-- CreateIndex
CREATE UNIQUE INDEX "esi_contributions_tenant_id_employee_id_period_key" ON "esi_contributions"("tenant_id", "employee_id", "period");

-- CreateIndex
CREATE INDEX "pt_contributions_tenant_id_period_idx" ON "pt_contributions"("tenant_id", "period");

-- CreateIndex
CREATE UNIQUE INDEX "pt_contributions_tenant_id_employee_id_period_key" ON "pt_contributions"("tenant_id", "employee_id", "period");

-- CreateIndex
CREATE INDEX "lwf_contributions_tenant_id_period_idx" ON "lwf_contributions"("tenant_id", "period");

-- CreateIndex
CREATE UNIQUE INDEX "lwf_contributions_tenant_id_employee_id_period_key" ON "lwf_contributions"("tenant_id", "employee_id", "period");

-- CreateIndex
CREATE INDEX "investment_declarations_tenant_id_status_idx" ON "investment_declarations"("tenant_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "investment_declarations_tenant_id_employee_id_financial_yea_key" ON "investment_declarations"("tenant_id", "employee_id", "financial_year");

-- CreateIndex
CREATE INDEX "proof_submissions_tenant_id_declaration_id_idx" ON "proof_submissions"("tenant_id", "declaration_id");

-- CreateIndex
CREATE INDEX "tds_computations_tenant_id_financial_year_idx" ON "tds_computations"("tenant_id", "financial_year");

-- CreateIndex
CREATE UNIQUE INDEX "tds_computations_tenant_id_employee_id_financial_year_month_key" ON "tds_computations"("tenant_id", "employee_id", "financial_year", "month");

-- CreateIndex
CREATE INDEX "form_16_tenant_id_idx" ON "form_16"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "form_16_tenant_id_employee_id_financial_year_key" ON "form_16"("tenant_id", "employee_id", "financial_year");

-- CreateIndex
CREATE INDEX "form_24q_tenant_id_idx" ON "form_24q"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "form_24q_tenant_id_quarter_financial_year_key" ON "form_24q"("tenant_id", "quarter", "financial_year");

-- CreateIndex
CREATE INDEX "compliance_calendar_tenant_id_statute_code_idx" ON "compliance_calendar"("tenant_id", "statute_code");

-- CreateIndex
CREATE INDEX "compliance_calendar_tenant_id_due_date_idx" ON "compliance_calendar"("tenant_id", "due_date");

-- CreateIndex
CREATE INDEX "compliance_calendar_status_idx" ON "compliance_calendar"("status");

-- CreateIndex
CREATE INDEX "review_cycles_tenant_id_status_idx" ON "review_cycles"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "reviews_tenant_id_cycle_id_idx" ON "reviews"("tenant_id", "cycle_id");

-- CreateIndex
CREATE INDEX "reviews_tenant_id_employee_id_idx" ON "reviews"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "reviews_tenant_id_reviewer_id_idx" ON "reviews"("tenant_id", "reviewer_id");

-- CreateIndex
CREATE INDEX "goals_tenant_id_employee_id_idx" ON "goals"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "goals_status_idx" ON "goals"("status");

-- CreateIndex
CREATE INDEX "check_ins_tenant_id_employee_id_idx" ON "check_ins"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "feedback_tenant_id_reviewee_id_idx" ON "feedback"("tenant_id", "reviewee_id");

-- CreateIndex
CREATE INDEX "feedback_tenant_id_reviewer_id_idx" ON "feedback"("tenant_id", "reviewer_id");

-- CreateIndex
CREATE INDEX "calibrations_tenant_id_cycle_id_idx" ON "calibrations"("tenant_id", "cycle_id");

-- CreateIndex
CREATE INDEX "pips_tenant_id_employee_id_idx" ON "pips"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "pips_status_idx" ON "pips"("status");

-- CreateIndex
CREATE INDEX "courses_tenant_id_idx" ON "courses"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "courses_tenant_id_code_key" ON "courses"("tenant_id", "code");

-- CreateIndex
CREATE INDEX "enrollments_tenant_id_employee_id_idx" ON "enrollments"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "enrollments_status_idx" ON "enrollments"("status");

-- CreateIndex
CREATE UNIQUE INDEX "enrollments_tenant_id_course_id_employee_id_key" ON "enrollments"("tenant_id", "course_id", "employee_id");

-- CreateIndex
CREATE INDEX "assessments_tenant_id_idx" ON "assessments"("tenant_id");

-- CreateIndex
CREATE INDEX "certifications_tenant_id_employee_id_idx" ON "certifications"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "certifications_expiry_date_idx" ON "certifications"("expiry_date");

-- CreateIndex
CREATE UNIQUE INDEX "certifications_tenant_id_certificate_no_key" ON "certifications"("tenant_id", "certificate_no");

-- CreateIndex
CREATE INDEX "training_requests_tenant_id_employee_id_idx" ON "training_requests"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "training_requests_status_idx" ON "training_requests"("status");

-- CreateIndex
CREATE INDEX "report_templates_tenant_id_category_idx" ON "report_templates"("tenant_id", "category");

-- CreateIndex
CREATE UNIQUE INDEX "report_templates_tenant_id_code_key" ON "report_templates"("tenant_id", "code");

-- CreateIndex
CREATE INDEX "report_executions_tenant_id_status_idx" ON "report_executions"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "report_executions_tenant_id_user_id_idx" ON "report_executions"("tenant_id", "user_id");

-- CreateIndex
CREATE INDEX "data_principal_requests_tenant_id_employee_id_idx" ON "data_principal_requests"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "data_principal_requests_status_idx" ON "data_principal_requests"("status");

-- CreateIndex
CREATE INDEX "login_history_tenant_id_user_id_idx" ON "login_history"("tenant_id", "user_id");

-- CreateIndex
CREATE INDEX "login_history_login_at_idx" ON "login_history"("login_at");

-- CreateIndex
CREATE INDEX "webhook_subscriptions_tenant_id_is_active_idx" ON "webhook_subscriptions"("tenant_id", "is_active");

-- CreateIndex
CREATE INDEX "webhook_deliveries_tenant_id_status_idx" ON "webhook_deliveries"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "webhook_deliveries_tenant_id_created_at_idx" ON "webhook_deliveries"("tenant_id", "created_at");

-- CreateIndex
CREATE INDEX "api_keys_tenant_id_is_active_idx" ON "api_keys"("tenant_id", "is_active");

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_tenant_id_key_prefix_key" ON "api_keys"("tenant_id", "key_prefix");

-- CreateIndex
CREATE INDEX "security_events_tenant_id_event_type_idx" ON "security_events"("tenant_id", "event_type");

-- CreateIndex
CREATE INDEX "security_events_tenant_id_severity_idx" ON "security_events"("tenant_id", "severity");

-- CreateIndex
CREATE INDEX "security_events_created_at_idx" ON "security_events"("created_at");

-- CreateIndex
CREATE INDEX "encryption_keys_tenant_id_is_active_idx" ON "encryption_keys"("tenant_id", "is_active");

-- CreateIndex
CREATE UNIQUE INDEX "encryption_keys_tenant_id_key_name_key_version_key" ON "encryption_keys"("tenant_id", "key_name", "key_version");

-- CreateIndex
CREATE INDEX "import_jobs_tenant_id_entity_type_idx" ON "import_jobs"("tenant_id", "entity_type");

-- CreateIndex
CREATE INDEX "import_jobs_status_idx" ON "import_jobs"("status");

-- CreateIndex
CREATE INDEX "export_jobs_tenant_id_entity_type_idx" ON "export_jobs"("tenant_id", "entity_type");

-- CreateIndex
CREATE INDEX "export_jobs_status_idx" ON "export_jobs"("status");

-- CreateIndex
CREATE INDEX "chart_of_accounts_tenant_id_parent_id_idx" ON "chart_of_accounts"("tenant_id", "parent_id");

-- CreateIndex
CREATE UNIQUE INDEX "chart_of_accounts_tenant_id_code_key" ON "chart_of_accounts"("tenant_id", "code");

-- CreateIndex
CREATE INDEX "fiscal_periods_tenant_id_status_idx" ON "fiscal_periods"("tenant_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "fiscal_periods_tenant_id_name_key" ON "fiscal_periods"("tenant_id", "name");

-- CreateIndex
CREATE INDEX "journal_entries_tenant_id_entry_date_idx" ON "journal_entries"("tenant_id", "entry_date");

-- CreateIndex
CREATE INDEX "journal_entries_status_idx" ON "journal_entries"("status");

-- CreateIndex
CREATE UNIQUE INDEX "journal_entries_tenant_id_entry_number_key" ON "journal_entries"("tenant_id", "entry_number");

-- CreateIndex
CREATE INDEX "journal_lines_tenant_id_entry_id_idx" ON "journal_lines"("tenant_id", "entry_id");

-- CreateIndex
CREATE INDEX "journal_lines_tenant_id_account_id_idx" ON "journal_lines"("tenant_id", "account_id");

-- CreateIndex
CREATE INDEX "ai_conversations_tenant_id_employee_id_idx" ON "ai_conversations"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "ai_conversations_status_idx" ON "ai_conversations"("status");

-- CreateIndex
CREATE INDEX "ai_messages_tenant_id_conversation_id_idx" ON "ai_messages"("tenant_id", "conversation_id");

-- CreateIndex
CREATE INDEX "asset_categories_tenant_id_idx" ON "asset_categories"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "asset_categories_tenant_id_name_key" ON "asset_categories"("tenant_id", "name");

-- CreateIndex
CREATE INDEX "asset_items_tenant_id_status_idx" ON "asset_items"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "asset_items_tenant_id_category_id_idx" ON "asset_items"("tenant_id", "category_id");

-- CreateIndex
CREATE UNIQUE INDEX "asset_items_tenant_id_asset_tag_key" ON "asset_items"("tenant_id", "asset_tag");

-- CreateIndex
CREATE INDEX "asset_requests_tenant_id_employee_id_idx" ON "asset_requests"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "asset_requests_status_idx" ON "asset_requests"("status");

-- CreateIndex
CREATE INDEX "asset_returns_tenant_id_asset_id_idx" ON "asset_returns"("tenant_id", "asset_id");

-- CreateIndex
CREATE INDEX "asset_returns_tenant_id_employee_id_idx" ON "asset_returns"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "ticket_categories_tenant_id_idx" ON "ticket_categories"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "ticket_categories_tenant_id_name_key" ON "ticket_categories"("tenant_id", "name");

-- CreateIndex
CREATE INDEX "helpdesk_tickets_tenant_id_employee_id_idx" ON "helpdesk_tickets"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "helpdesk_tickets_tenant_id_status_idx" ON "helpdesk_tickets"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "helpdesk_tickets_tenant_id_priority_idx" ON "helpdesk_tickets"("tenant_id", "priority");

-- CreateIndex
CREATE INDEX "ticket_comments_tenant_id_ticket_id_idx" ON "ticket_comments"("tenant_id", "ticket_id");

-- CreateIndex
CREATE INDEX "knowledge_base_tenant_id_category_idx" ON "knowledge_base"("tenant_id", "category");

-- CreateIndex
CREATE INDEX "knowledge_base_is_published_idx" ON "knowledge_base"("is_published");

-- CreateIndex
CREATE INDEX "expense_policies_tenant_id_idx" ON "expense_policies"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "expense_policies_tenant_id_category_grade_id_location_id_key" ON "expense_policies"("tenant_id", "category", "grade_id", "location_id");

-- CreateIndex
CREATE INDEX "expense_claims_tenant_id_employee_id_idx" ON "expense_claims"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "expense_claims_status_idx" ON "expense_claims"("status");

-- CreateIndex
CREATE UNIQUE INDEX "expense_claims_tenant_id_claim_number_key" ON "expense_claims"("tenant_id", "claim_number");

-- CreateIndex
CREATE INDEX "expense_claim_lines_tenant_id_claim_id_idx" ON "expense_claim_lines"("tenant_id", "claim_id");

-- CreateIndex
CREATE INDEX "expense_advances_tenant_id_employee_id_idx" ON "expense_advances"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "expense_advances_status_idx" ON "expense_advances"("status");

-- CreateIndex
CREATE INDEX "travel_policies_tenant_id_idx" ON "travel_policies"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "travel_policies_tenant_id_grade_id_key" ON "travel_policies"("tenant_id", "grade_id");

-- CreateIndex
CREATE INDEX "travel_requests_tenant_id_employee_id_idx" ON "travel_requests"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "travel_requests_status_idx" ON "travel_requests"("status");

-- CreateIndex
CREATE INDEX "travel_bookings_tenant_id_request_id_idx" ON "travel_bookings"("tenant_id", "request_id");

-- CreateIndex
CREATE INDEX "announcements_tenant_id_is_pinned_idx" ON "announcements"("tenant_id", "is_pinned");

-- CreateIndex
CREATE INDEX "announcements_publish_from_idx" ON "announcements"("publish_from");

-- CreateIndex
CREATE INDEX "announcement_reads_tenant_id_employee_id_idx" ON "announcement_reads"("tenant_id", "employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "announcement_reads_tenant_id_announcement_id_employee_id_key" ON "announcement_reads"("tenant_id", "announcement_id", "employee_id");

-- CreateIndex
CREATE INDEX "surveys_tenant_id_status_idx" ON "surveys"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "survey_questions_tenant_id_survey_id_idx" ON "survey_questions"("tenant_id", "survey_id");

-- CreateIndex
CREATE INDEX "survey_responses_tenant_id_survey_id_idx" ON "survey_responses"("tenant_id", "survey_id");

-- CreateIndex
CREATE INDEX "survey_responses_tenant_id_employee_id_idx" ON "survey_responses"("tenant_id", "employee_id");

-- CreateIndex
CREATE INDEX "recognitions_tenant_id_receiver_id_idx" ON "recognitions"("tenant_id", "receiver_id");

-- CreateIndex
CREATE INDEX "recognitions_tenant_id_giver_id_idx" ON "recognitions"("tenant_id", "giver_id");

-- AddForeignKey
ALTER TABLE "employee_profiles" ADD CONSTRAINT "employee_profiles_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_family" ADD CONSTRAINT "employee_family_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_education" ADD CONSTRAINT "employee_education_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_experience" ADD CONSTRAINT "employee_experience_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_types" ADD CONSTRAINT "document_types_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_documents" ADD CONSTRAINT "company_documents_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_templates" ADD CONSTRAINT "document_templates_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "policy_documents" ADD CONSTRAINT "policy_documents_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requisitions" ADD CONSTRAINT "requisitions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidates" ADD CONSTRAINT "candidates_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "onboarding_templates" ADD CONSTRAINT "onboarding_templates_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "onboarding_tasks" ADD CONSTRAINT "onboarding_tasks_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "onboarding_cases" ADD CONSTRAINT "onboarding_cases_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "onboarding_case_tasks" ADD CONSTRAINT "onboarding_case_tasks_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "onboarding_case_tasks" ADD CONSTRAINT "onboarding_case_tasks_case_id_fkey" FOREIGN KEY ("case_id") REFERENCES "onboarding_cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resignations" ADD CONSTRAINT "resignations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terminations" ADD CONSTRAINT "terminations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clearance_checklist" ADD CONSTRAINT "clearance_checklist_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exit_interviews" ADD CONSTRAINT "exit_interviews_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_days" ADD CONSTRAINT "attendance_days_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "punches" ADD CONSTRAINT "punches_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "overtime" ADD CONSTRAINT "overtime_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regularizations" ADD CONSTRAINT "regularizations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shift_templates" ADD CONSTRAINT "shift_templates_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rosters" ADD CONSTRAINT "rosters_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shift_swaps" ADD CONSTRAINT "shift_swaps_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_policies" ADD CONSTRAINT "leave_policies_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_applications" ADD CONSTRAINT "leave_applications_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_ledger" ADD CONSTRAINT "leave_ledger_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comp_off" ADD CONSTRAINT "comp_off_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payroll_components" ADD CONSTRAINT "payroll_components_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_structures" ADD CONSTRAINT "salary_structures_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_compensation" ADD CONSTRAINT "employee_compensation_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payroll_periods" ADD CONSTRAINT "payroll_periods_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payroll_runs" ADD CONSTRAINT "payroll_runs_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payslips" ADD CONSTRAINT "payslips_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loans" ADD CONSTRAINT "loans_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fnf" ADD CONSTRAINT "fnf_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statutory_rule_sets" ADD CONSTRAINT "statutory_rule_sets_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pf_contributions" ADD CONSTRAINT "pf_contributions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "esi_contributions" ADD CONSTRAINT "esi_contributions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pt_contributions" ADD CONSTRAINT "pt_contributions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lwf_contributions" ADD CONSTRAINT "lwf_contributions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investment_declarations" ADD CONSTRAINT "investment_declarations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proof_submissions" ADD CONSTRAINT "proof_submissions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tds_computations" ADD CONSTRAINT "tds_computations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_16" ADD CONSTRAINT "form_16_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_24q" ADD CONSTRAINT "form_24q_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compliance_calendar" ADD CONSTRAINT "compliance_calendar_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review_cycles" ADD CONSTRAINT "review_cycles_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_cycle_id_fkey" FOREIGN KEY ("cycle_id") REFERENCES "review_cycles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goals" ADD CONSTRAINT "goals_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calibrations" ADD CONSTRAINT "calibrations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pips" ADD CONSTRAINT "pips_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assessments" ADD CONSTRAINT "assessments_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certifications" ADD CONSTRAINT "certifications_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "training_requests" ADD CONSTRAINT "training_requests_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_templates" ADD CONSTRAINT "report_templates_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_executions" ADD CONSTRAINT "report_executions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_principal_requests" ADD CONSTRAINT "data_principal_requests_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login_history" ADD CONSTRAINT "login_history_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "webhook_subscriptions" ADD CONSTRAINT "webhook_subscriptions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "webhook_deliveries" ADD CONSTRAINT "webhook_deliveries_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "security_events" ADD CONSTRAINT "security_events_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encryption_keys" ADD CONSTRAINT "encryption_keys_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "import_jobs" ADD CONSTRAINT "import_jobs_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "export_jobs" ADD CONSTRAINT "export_jobs_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chart_of_accounts" ADD CONSTRAINT "chart_of_accounts_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fiscal_periods" ADD CONSTRAINT "fiscal_periods_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_entries" ADD CONSTRAINT "journal_entries_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_lines" ADD CONSTRAINT "journal_lines_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_lines" ADD CONSTRAINT "journal_lines_entry_id_fkey" FOREIGN KEY ("entry_id") REFERENCES "journal_entries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_conversations" ADD CONSTRAINT "ai_conversations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_messages" ADD CONSTRAINT "ai_messages_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_messages" ADD CONSTRAINT "ai_messages_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "ai_conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_categories" ADD CONSTRAINT "asset_categories_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_items" ADD CONSTRAINT "asset_items_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_requests" ADD CONSTRAINT "asset_requests_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_returns" ADD CONSTRAINT "asset_returns_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_categories" ADD CONSTRAINT "ticket_categories_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "helpdesk_tickets" ADD CONSTRAINT "helpdesk_tickets_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_comments" ADD CONSTRAINT "ticket_comments_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "knowledge_base" ADD CONSTRAINT "knowledge_base_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_policies" ADD CONSTRAINT "expense_policies_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_claims" ADD CONSTRAINT "expense_claims_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_claim_lines" ADD CONSTRAINT "expense_claim_lines_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_advances" ADD CONSTRAINT "expense_advances_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "travel_policies" ADD CONSTRAINT "travel_policies_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "travel_requests" ADD CONSTRAINT "travel_requests_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "travel_bookings" ADD CONSTRAINT "travel_bookings_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "announcements" ADD CONSTRAINT "announcements_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "announcement_reads" ADD CONSTRAINT "announcement_reads_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "surveys" ADD CONSTRAINT "surveys_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survey_questions" ADD CONSTRAINT "survey_questions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survey_responses" ADD CONSTRAINT "survey_responses_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recognitions" ADD CONSTRAINT "recognitions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
