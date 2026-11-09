-- ============================================================================
-- Migration: 014_leave_types_and_balances.sql
-- Description: Leave Types, Quotas and Balances
-- Generated from core schema for HRMS Enterprise Platform
-- ============================================================================

-- CreateTable
CREATE TABLE "leave_types" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "is_paid" BOOLEAN NOT NULL DEFAULT true,
    "color" VARCHAR(7) NOT NULL DEFAULT '#3B82F6',
    "requires_attachment" BOOLEAN NOT NULL DEFAULT false,
    "half_day_allowed" BOOLEAN NOT NULL DEFAULT true,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "leave_types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "leave_types_tenant_id_idx" ON "leave_types"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "leave_types_tenant_id_code_key" ON "leave_types"("tenant_id", "code");

-- AddForeignKey
ALTER TABLE "leave_types" ADD CONSTRAINT "leave_types_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
