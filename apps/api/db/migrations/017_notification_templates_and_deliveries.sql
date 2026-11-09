-- ============================================================================
-- Migration: 017_notification_templates_and_deliveries.sql
-- Description: Notification Templates and Multi-Channel Delivery Logs
-- Generated from core schema for HRMS Enterprise Platform
-- ============================================================================

-- CreateTable
CREATE TABLE "notification_templates" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "channel" VARCHAR(50) NOT NULL,
    "subject" VARCHAR(255),
    "bodyTemplate" VARCHAR(255) NOT NULL,
    "is_locked" BOOLEAN NOT NULL DEFAULT false,
    "variables_json" JSONB NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "notification_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_deliveries" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "outbox_event_id" UUID NOT NULL,
    "recipient_user_id" UUID NOT NULL,
    "channel" VARCHAR(50) NOT NULL,
    "template_code" VARCHAR(100),
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "error_message" TEXT,
    "sent_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_deliveries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "notification_templates_tenant_id_channel_idx" ON "notification_templates"("tenant_id", "channel");

-- CreateIndex
CREATE UNIQUE INDEX "notification_templates_tenant_id_code_key" ON "notification_templates"("tenant_id", "code");

-- CreateIndex
CREATE INDEX "notification_deliveries_tenant_id_status_idx" ON "notification_deliveries"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "notification_deliveries_tenant_id_recipient_user_id_idx" ON "notification_deliveries"("tenant_id", "recipient_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "notification_deliveries_outbox_event_id_recipient_user_id_c_key" ON "notification_deliveries"("outbox_event_id", "recipient_user_id", "channel");

-- AddForeignKey
ALTER TABLE "notification_templates" ADD CONSTRAINT "notification_templates_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_deliveries" ADD CONSTRAINT "notification_deliveries_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
