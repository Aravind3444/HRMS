-- CreateTable
CREATE TABLE "employees" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "legal_entity_id" UUID NOT NULL,
    "location_id" UUID,
    "department_id" UUID,
    "designation_id" UUID,
    "grade_id" UUID,
    "cost_center_id" UUID,
    "employment_type_id" UUID,
    "employee_code" VARCHAR(50) NOT NULL,
    "employee_type" VARCHAR(50) NOT NULL,
    "date_of_joining" TIMESTAMPTZ NOT NULL,
    "date_of_birth" TIMESTAMPTZ,
    "gender" VARCHAR(20),
    "blood_group" VARCHAR(10),
    "marital_status" VARCHAR(20),
    "address" TEXT,
    "city" VARCHAR(100),
    "state" VARCHAR(100),
    "pincode" VARCHAR(20),
    "country" VARCHAR(100),
    "emergency_contact_name" VARCHAR(255),
    "emergency_contact_phone" VARCHAR(20),
    "emergency_contact_relation" VARCHAR(50),
    "pan_number" VARCHAR(20),
    "aadhaar_number" VARCHAR(30),
    "bank_account_number" VARCHAR(50),
    "bank_name" VARCHAR(255),
    "bank_branch" VARCHAR(255),
    "bank_ifsc" VARCHAR(20),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_documents" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "document_type" VARCHAR(100) NOT NULL,
    "document_name" VARCHAR(255) NOT NULL,
    "file_url" TEXT NOT NULL,
    "file_size" INTEGER,
    "uploaded_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiry_date" TIMESTAMPTZ,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "employee_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_emergency_contacts" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "relationship" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255),
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_emergency_contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_bank_details" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "bank_name" VARCHAR(255) NOT NULL,
    "branch_name" VARCHAR(255) NOT NULL,
    "account_number" VARCHAR(50) NOT NULL,
    "ifsc_code" VARCHAR(20) NOT NULL,
    "account_type" VARCHAR(50) NOT NULL,
    "is_primary" BOOLEAN NOT NULL DEFAULT true,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_bank_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_tax_info" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "pan_number" VARCHAR(20),
    "aadhaar_number" VARCHAR(30),
    "uan_number" VARCHAR(30),
    "bank_account_number" VARCHAR(50),
    "bank_name" VARCHAR(255),
    "bank_ifsc" VARCHAR(20),
    "tax_slab" VARCHAR(50),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "employee_tax_info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "employees_tenant_id_idx" ON "employees"("tenant_id");

-- CreateIndex
CREATE INDEX "employees_tenant_id_department_id_idx" ON "employees"("tenant_id", "department_id");

-- CreateIndex
CREATE INDEX "employees_tenant_id_designation_id_idx" ON "employees"("tenant_id", "designation_id");

-- CreateIndex
CREATE INDEX "employees_tenant_id_employment_type_id_idx" ON "employees"("tenant_id", "employment_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "employees_tenant_id_employee_code_key" ON "employees"("tenant_id", "employee_code");

-- CreateIndex
CREATE UNIQUE INDEX "employees_tenant_id_user_id_key" ON "employees"("tenant_id", "user_id");

-- CreateIndex
CREATE INDEX "employee_documents_tenant_id_idx" ON "employee_documents"("tenant_id");

-- CreateIndex
CREATE INDEX "employee_documents_employee_id_idx" ON "employee_documents"("employee_id");

-- CreateIndex
CREATE INDEX "employee_emergency_contacts_tenant_id_idx" ON "employee_emergency_contacts"("tenant_id");

-- CreateIndex
CREATE INDEX "employee_emergency_contacts_employee_id_idx" ON "employee_emergency_contacts"("employee_id");

-- CreateIndex
CREATE INDEX "employee_bank_details_tenant_id_idx" ON "employee_bank_details"("tenant_id");

-- CreateIndex
CREATE INDEX "employee_bank_details_employee_id_idx" ON "employee_bank_details"("employee_id");

-- CreateIndex
CREATE INDEX "employee_tax_info_tenant_id_idx" ON "employee_tax_info"("tenant_id");

-- CreateIndex
CREATE INDEX "employee_tax_info_employee_id_idx" ON "employee_tax_info"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_tax_info_tenant_id_employee_id_key" ON "employee_tax_info"("tenant_id", "employee_id");

-- AddForeignKey
ALTER TABLE "cost_centers" ADD CONSTRAINT "cost_centers_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "cost_centers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_legal_entity_id_fkey" FOREIGN KEY ("legal_entity_id") REFERENCES "legal_entities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_designation_id_fkey" FOREIGN KEY ("designation_id") REFERENCES "designations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_grade_id_fkey" FOREIGN KEY ("grade_id") REFERENCES "grades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_cost_center_id_fkey" FOREIGN KEY ("cost_center_id") REFERENCES "cost_centers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_employment_type_id_fkey" FOREIGN KEY ("employment_type_id") REFERENCES "employment_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_documents" ADD CONSTRAINT "employee_documents_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_documents" ADD CONSTRAINT "employee_documents_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_emergency_contacts" ADD CONSTRAINT "employee_emergency_contacts_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_emergency_contacts" ADD CONSTRAINT "employee_emergency_contacts_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_bank_details" ADD CONSTRAINT "employee_bank_details_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_bank_details" ADD CONSTRAINT "employee_bank_details_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_tax_info" ADD CONSTRAINT "employee_tax_info_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_tax_info" ADD CONSTRAINT "employee_tax_info_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
