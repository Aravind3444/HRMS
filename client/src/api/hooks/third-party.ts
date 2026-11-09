/**
 * Third-Party Provider Hooks
 * ==========================
 * Placeholder hooks for integrating third-party providers (e.g., Brevo, SendGrid, AWS SES,
 * Twilio, etc.) for email, SMS, notifications, and other external services.
 *
 * These hooks are designed to be easily swapped or extended when you're ready to
 * integrate a specific provider. Each hook follows the same signature pattern.
 */

import { apiClient } from "@/api/client";

// ============================================
// EMAIL PROVIDER (Brevo / SendGrid / AWS SES)
// ============================================

export type EmailProvider = "brevo" | "sendgrid" | "ses" | "smtp" | "none";

export interface EmailConfig {
  provider: EmailProvider;
  apiKey?: string;
  senderEmail?: string;
  senderName?: string;
  baseUrl?: string;
}

export interface SendEmailRequest {
  to: string[];
  subject: string;
  htmlContent: string;
  textContent?: string;
  cc?: string[];
  bcc?: string[];
  replyTo?: string;
}

export interface SendEmailResponse {
  messageId: string;
  status: "sent" | "queued" | "failed";
  provider: string;
}

export const emailProviderApi = {
  /** Get current email provider configuration */
  getConfig: () => apiClient.get<{ config: EmailConfig }>("/integrations/email/config"),

  /** Update email provider configuration */
  updateConfig: (config: Partial<EmailConfig>) =>
    apiClient.patch<{ config: EmailConfig }>("/integrations/email/config", config),

  /** Send an email via the configured provider */
  sendEmail: (data: SendEmailRequest) =>
    apiClient.post<SendEmailResponse>("/integrations/email/send", data),

  /** Send a templated email (e.g., welcome, password reset, invitation) */
  sendTemplatedEmail: (
    templateId: string,
    to: string[],
    templateParams: Record<string, any>
  ) =>
    apiClient.post<SendEmailResponse>("/integrations/email/template", {
      templateId,
      to,
      templateParams,
    }),

  /** Test email provider connection */
  testConnection: () => apiClient.post<{ success: boolean; message: string }>("/integrations/email/test"),
};

// ============================================
// SMS PROVIDER (Twilio / AWS SNS / MSG91)
// ============================================

export type SmsProvider = "twilio" | "aws-sns" | "msg91" | "none";

export interface SmsConfig {
  provider: SmsProvider;
  accountSid?: string;
  authToken?: string;
  fromNumber?: string;
  region?: string;
}

export interface SendSmsRequest {
  to: string;
  message: string;
  mediaUrl?: string[];
}

export interface SendSmsResponse {
  messageSid: string;
  status: "sent" | "queued" | "failed";
  provider: string;
}

export const smsProviderApi = {
  getConfig: () => apiClient.get<{ config: SmsConfig }>("/integrations/sms/config"),
  updateConfig: (config: Partial<SmsConfig>) =>
    apiClient.patch<{ config: SmsConfig }>("/integrations/sms/config", config),
  sendSms: (data: SendSmsRequest) =>
    apiClient.post<SendSmsResponse>("/integrations/sms/send", data),
  testConnection: () => apiClient.post<{ success: boolean; message: string }>("/integrations/sms/test"),
};

// ============================================
// NOTIFICATION PROVIDER (Firebase / OneSignal / Pusher)
// ============================================

export type PushProvider = "firebase" | "onesignal" | "pusher" | "none";

export interface PushConfig {
  provider: PushProvider;
  serverKey?: string;
  senderId?: string;
  appId?: string;
  restApiKey?: string;
}

export interface SendPushRequest {
  userIds: string[];
  title: string;
  body: string;
  data?: Record<string, any>;
  imageUrl?: string;
  clickAction?: string;
}

export interface SendPushResponse {
  sent: number;
  failed: number;
  provider: string;
}

export const pushProviderApi = {
  getConfig: () => apiClient.get<{ config: PushConfig }>("/integrations/push/config"),
  updateConfig: (config: Partial<PushConfig>) =>
    apiClient.patch<{ config: PushConfig }>("/integrations/push/config", config),
  sendPush: (data: SendPushRequest) =>
    apiClient.post<SendPushResponse>("/integrations/push/send", data),
  testConnection: () => apiClient.post<{ success: boolean; message: string }>("/integrations/push/test"),
};

// ============================================
// FILE STORAGE PROVIDER (AWS S3 / Azure Blob / GCS)
// ============================================

export type StorageProvider = "s3" | "azure" | "gcs" | "local";

export interface StorageConfig {
  provider: StorageProvider;
  bucket?: string;
  region?: string;
  accessKeyId?: string;
  secretAccessKey?: string;
  endpoint?: string;
  cdnUrl?: string;
}

export interface PresignedUrlRequest {
  fileName: string;
  contentType: string;
  folder?: string;
}

export interface PresignedUrlResponse {
  uploadUrl: string;
  fileUrl: string;
  fileKey: string;
  expiresIn: number;
}

export const storageProviderApi = {
  getConfig: () => apiClient.get<{ config: StorageConfig }>("/integrations/storage/config"),
  updateConfig: (config: Partial<StorageConfig>) =>
    apiClient.patch<{ config: StorageConfig }>("/integrations/storage/config", config),
  getPresignedUploadUrl: (data: PresignedUrlRequest) =>
    apiClient.post<PresignedUrlResponse>("/integrations/storage/presigned-url", data),
  deleteFile: (fileKey: string) =>
    apiClient.delete<{ success: boolean }>(`/integrations/storage/files/${fileKey}`),
  testConnection: () => apiClient.post<{ success: boolean; message: string }>("/integrations/storage/test"),
};

// ============================================
// PAYROLL PROVIDER (QuickBooks / Xero / Gusto / Razorpay)
// ============================================

export type PayrollProvider = "quickbooks" | "xero" | "gusto" | "razorpay" | "none";

export interface PayrollConfig {
  provider: PayrollProvider;
  clientId?: string;
  clientSecret?: string;
  environment?: "sandbox" | "production";
  companyId?: string;
}

export interface PayrollSyncResult {
  synced: number;
  errors: number;
  provider: string;
  syncedAt: string;
}

export const payrollProviderApi = {
  getConfig: () => apiClient.get<{ config: PayrollConfig }>("/integrations/payroll/config"),
  updateConfig: (config: Partial<PayrollConfig>) =>
    apiClient.patch<{ config: PayrollConfig }>("/integrations/payroll/config", config),
  syncEmployees: () =>
    apiClient.post<PayrollSyncResult>("/integrations/payroll/sync-employees"),
  testConnection: () => apiClient.post<{ success: boolean; message: string }>("/integrations/payroll/test"),
};

// ============================================
// UTILITY: Check if a third-party provider is configured
// ============================================

export const integrationApi = {
  /** List all integrations and their configuration status */
  list: () => apiClient.get<{
    integrations: Array<{
      name: string;
      provider: string;
      configured: boolean;
      lastSynced?: string;
      status: "active" | "inactive" | "error";
    }>;
  }>("/integrations"),

  /** Health check for all integrations */
  health: () => apiClient.get<{
    overall: "healthy" | "degraded" | "unhealthy";
    services: Array<{ name: string; status: "healthy" | "unhealthy"; latency?: number }>;
  }>("/integrations/health"),
};
