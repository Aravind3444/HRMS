-- ============================================================================
-- Migration: 004_legal_entities_and_statutory_registry.sql
-- Description: Legal Entities and Statutory Compliance Registry
-- Generated from core schema for HRMS Enterprise Platform
-- ============================================================================

-- CreateTable
CREATE TABLE "legal_entities" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "is_default" BOOLEAN NOT NULL DEFAULT false,
    "cin" VARCHAR(21),
    "pan" VARCHAR(10),
    "tan" VARCHAR(10),
    "gstin" VARCHAR(15),
    "pf_number" VARCHAR(50),
    "esi_number" VARCHAR(50),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "legal_entities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "legal_entities_tenant_id_idx" ON "legal_entities"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "legal_entities_tenant_id_code_key" ON "legal_entities"("tenant_id", "code");

-- AddForeignKey
ALTER TABLE "legal_entities" ADD CONSTRAINT "legal_entities_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
