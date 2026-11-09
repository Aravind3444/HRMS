-- ============================================================================
-- Migration: 003_tenant_settings_and_preferences.sql
-- Description: Tenant Settings and Custom Preferences
-- Generated from core schema for HRMS Enterprise Platform
-- ============================================================================

-- CreateTable
CREATE TABLE "tenant_settings" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "country" VARCHAR(2) NOT NULL DEFAULT 'IN',
    "timezone" VARCHAR(100) NOT NULL DEFAULT 'Asia/Kolkata',
    "currency" VARCHAR(3) NOT NULL DEFAULT 'INR',
    "week_start_day" INTEGER NOT NULL DEFAULT 1,
    "mfa_required" BOOLEAN NOT NULL DEFAULT false,
    "session_ttl_hours" INTEGER NOT NULL DEFAULT 12,
    "setup_completed" BOOLEAN NOT NULL DEFAULT false,
    "completed_at" TIMESTAMPTZ,
    "completed_by" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "tenant_settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tenant_settings_tenant_id_key" ON "tenant_settings"("tenant_id");

-- AddForeignKey
ALTER TABLE "tenant_settings" ADD CONSTRAINT "tenant_settings_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
