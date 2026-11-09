-- ============================================================================
-- Migration: 016_workflow_engine_definitions_and_tasks.sql
-- Description: Workflow Engine Definitions, Approval Tasks and Delegations
-- Generated from core schema for HRMS Enterprise Platform
-- ============================================================================

-- CreateTable
CREATE TABLE "workflow_definitions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "workflow_definitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workflow_versions" (
    "id" UUID NOT NULL,
    "workflow_definition_id" UUID NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "is_published" BOOLEAN NOT NULL DEFAULT false,
    "steps_json" JSONB NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "workflow_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "approval_instances" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "workflow_version_id" UUID NOT NULL,
    "subject_type" VARCHAR(100) NOT NULL,
    "subject_id" UUID NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "current_step" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "completed_at" TIMESTAMPTZ,

    CONSTRAINT "approval_instances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "approval_tasks" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "instance_id" UUID NOT NULL,
    "step_number" INTEGER NOT NULL,
    "assignee_user_id" UUID,
    "assignee_role_code" VARCHAR(50),
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "decision_reason" TEXT,
    "decided_at" TIMESTAMPTZ,
    "dueAt" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "approval_tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "delegations" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "delegator_user_id" UUID NOT NULL,
    "delegate_user_id" UUID NOT NULL,
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ NOT NULL,
    "scope_type" VARCHAR(50) NOT NULL,
    "scope_value" VARCHAR(100),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "delegations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "workflow_definitions_tenant_id_idx" ON "workflow_definitions"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "workflow_definitions_tenant_id_code_key" ON "workflow_definitions"("tenant_id", "code");

-- CreateIndex
CREATE UNIQUE INDEX "workflow_versions_workflow_definition_id_version_key" ON "workflow_versions"("workflow_definition_id", "version");

-- CreateIndex
CREATE INDEX "approval_instances_tenant_id_subject_type_subject_id_idx" ON "approval_instances"("tenant_id", "subject_type", "subject_id");

-- CreateIndex
CREATE INDEX "approval_instances_tenant_id_status_idx" ON "approval_instances"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "approval_tasks_tenant_id_assignee_user_id_status_idx" ON "approval_tasks"("tenant_id", "assignee_user_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "approval_tasks_instance_id_step_number_assignee_user_id_key" ON "approval_tasks"("instance_id", "step_number", "assignee_user_id");

-- CreateIndex
CREATE INDEX "delegations_tenant_id_delegator_user_id_is_active_idx" ON "delegations"("tenant_id", "delegator_user_id", "is_active");

-- CreateIndex
CREATE INDEX "delegations_tenant_id_delegate_user_id_is_active_idx" ON "delegations"("tenant_id", "delegate_user_id", "is_active");

-- AddForeignKey
ALTER TABLE "workflow_definitions" ADD CONSTRAINT "workflow_definitions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflow_versions" ADD CONSTRAINT "workflow_versions_workflow_definition_id_fkey" FOREIGN KEY ("workflow_definition_id") REFERENCES "workflow_definitions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "approval_instances" ADD CONSTRAINT "approval_instances_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "approval_instances" ADD CONSTRAINT "approval_instances_workflow_version_id_fkey" FOREIGN KEY ("workflow_version_id") REFERENCES "workflow_versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "approval_tasks" ADD CONSTRAINT "approval_tasks_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "approval_tasks" ADD CONSTRAINT "approval_tasks_instance_id_fkey" FOREIGN KEY ("instance_id") REFERENCES "approval_instances"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delegations" ADD CONSTRAINT "delegations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
