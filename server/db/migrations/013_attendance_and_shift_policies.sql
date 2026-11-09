-- ============================================================================
-- Migration: 013_attendance_and_shift_policies.sql
-- Description: Attendance Policy Versions and Shift Configurations
-- Generated from core schema for HRMS Enterprise Platform
-- ============================================================================

-- CreateTable
CREATE TABLE "attendance_policy_versions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "grace_minutes" INTEGER NOT NULL DEFAULT 15,
    "late_mark_threshold_minutes" INTEGER NOT NULL DEFAULT 15,
    "half_day_threshold_minutes" INTEGER NOT NULL DEFAULT 240,
    "full_day_threshold_minutes" INTEGER NOT NULL DEFAULT 480,
    "allowed_punch_window_minutes" INTEGER NOT NULL DEFAULT 120,
    "capture_modes" TEXT[] DEFAULT ARRAY['WEB']::TEXT[],
    "geofence_action" TEXT NOT NULL DEFAULT 'FLAG',
    "overtime_enabled" BOOLEAN NOT NULL DEFAULT true,
    "overtime_threshold_minutes" INTEGER NOT NULL DEFAULT 30,
    "overtime_requires_approval" BOOLEAN NOT NULL DEFAULT true,
    "late_mark_policy" JSONB,
    "schema_version" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "attendance_policy_versions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "attendance_policy_versions_tenant_id_is_active_idx" ON "attendance_policy_versions"("tenant_id", "is_active");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_policy_versions_tenant_id_version_key" ON "attendance_policy_versions"("tenant_id", "version");

-- AddForeignKey
ALTER TABLE "attendance_policy_versions" ADD CONSTRAINT "attendance_policy_versions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
