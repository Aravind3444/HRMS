-- ============================================================================
-- Migration: 018_feature_flags_and_system_indexes.sql
-- Description: Feature Flags and System-Wide Indexes
-- Generated from core schema for HRMS Enterprise Platform
-- ============================================================================

-- CreateTable
CREATE TABLE "feature_flags" (
    "id" UUID NOT NULL,
    "tenant_id" UUID,
    "code" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "is_gated" BOOLEAN NOT NULL DEFAULT false,
    "gate_name" VARCHAR(100),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "feature_flags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "feature_flags_tenant_id_enabled_idx" ON "feature_flags"("tenant_id", "enabled");

-- CreateIndex
CREATE UNIQUE INDEX "feature_flags_tenant_id_code_key" ON "feature_flags"("tenant_id", "code");

-- AddForeignKey
ALTER TABLE "feature_flags" ADD CONSTRAINT "feature_flags_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
