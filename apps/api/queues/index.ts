/**
 * Async Job Queues Registry
 * BullMQ / Redis Queues configuration for Background Processing
 */
export const QUEUES = {
  EMAIL: 'email-queue',
  AUDIT: 'audit-queue',
  NOTIFICATIONS: 'notifications-queue',
  PAYROLL: 'payroll-queue',
} as const;

