-- ============================================================================
-- Migration: 015_holiday_calendars_and_observances.sql
-- Description: Holiday Calendars and Regional Observances
-- Generated from core schema for HRMS Enterprise Platform
-- ============================================================================

-- CreateTable
CREATE TABLE "holiday_calendars" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "legal_entity_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "is_default" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "holiday_calendars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "holidays" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "holiday_calendar_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "date" TIMESTAMPTZ NOT NULL,
    "type" VARCHAR(50) NOT NULL DEFAULT 'NATIONAL',
    "is_recurring" BOOLEAN NOT NULL DEFAULT false,
    "month" INTEGER,
    "day" INTEGER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "holidays_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "holiday_calendars_tenant_id_legal_entity_id_idx" ON "holiday_calendars"("tenant_id", "legal_entity_id");

-- CreateIndex
CREATE UNIQUE INDEX "holiday_calendars_tenant_id_legal_entity_id_name_key" ON "holiday_calendars"("tenant_id", "legal_entity_id", "name");

-- CreateIndex
CREATE INDEX "holidays_tenant_id_date_idx" ON "holidays"("tenant_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "holidays_tenant_id_holiday_calendar_id_name_date_key" ON "holidays"("tenant_id", "holiday_calendar_id", "name", "date");

-- AddForeignKey
ALTER TABLE "holiday_calendars" ADD CONSTRAINT "holiday_calendars_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holiday_calendars" ADD CONSTRAINT "holiday_calendars_legal_entity_id_fkey" FOREIGN KEY ("legal_entity_id") REFERENCES "legal_entities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holidays" ADD CONSTRAINT "holidays_holiday_calendar_id_fkey" FOREIGN KEY ("holiday_calendar_id") REFERENCES "holiday_calendars"("id") ON DELETE CASCADE ON UPDATE CASCADE;
