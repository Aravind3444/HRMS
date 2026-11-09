import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import * as crypto from 'crypto';

@Injectable()
export class DefaultSeedingService {
  private readonly logger = new Logger(DefaultSeedingService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Seed all default data for a newly activated tenant.
   * Idempotent - safe to run multiple times.
   */
  async seedDefaults(tenantId: string, actorUserId: string): Promise<void> {
    this.logger.log(`Seeding defaults for tenant ${tenantId}`);

    await this.prisma.$transaction(async (tx) => {
      // 1. Seed Leave Types (M12)
      await this.seedLeaveTypes(tx, tenantId);

      // 2. Seed Holiday Template (M12)
      await this.seedHolidayTemplate(tx, tenantId);

      // 3. Seed Attendance Policy Version (M10) - GATED, create but don't activate
      await this.seedAttendancePolicyVersion(tx, tenantId);

      // 4. Seed Workflow Definitions (M25) - basic leave/regularization/OT/profile_change
      await this.seedWorkflowDefinitions(tx, tenantId);

      // 5. Seed Notification Templates (M24) - security-critical + common
      await this.seedNotificationTemplates(tx, tenantId);

      // 6. Seed Feature Flags (M28/TEN-016) - all gated features OFF by default
      await this.seedFeatureFlags(tx, tenantId);

      // 7. Create default Audit Event for tenant activation
      await tx.auditEvent.create({
        data: {
          tenantId,
          actorUserId,
          action: 'TENANT_DEFAULTS_SEEDED',
          resourceType: 'Tenant',
          resourceId: tenantId,
          correlationId: crypto.randomUUID(),
        },
      });
    });

    this.logger.log(`Defaults seeded for tenant ${tenantId}`);
  }

  private async seedLeaveTypes(tx: any, tenantId: string): Promise<void> {
    const defaultLeaveTypes = [
      { code: 'ANNUAL', name: 'Annual Leave', isPaid: true, color: '#3B82F6', requiresAttachment: false, halfDayAllowed: true, sortOrder: 1 },
      { code: 'SICK', name: 'Sick Leave', isPaid: true, color: '#EF4444', requiresAttachment: true, halfDayAllowed: true, sortOrder: 2 },
      { code: 'CASUAL', name: 'Casual Leave', isPaid: true, color: '#F59E0B', requiresAttachment: false, halfDayAllowed: true, sortOrder: 3 },
      { code: 'MATERNITY', name: 'Maternity Leave', isPaid: true, color: '#EC4899', requiresAttachment: true, halfDayAllowed: false, sortOrder: 4 },
      { code: 'PATERNITY', name: 'Paternity Leave', isPaid: true, color: '#8B5CF6', requiresAttachment: true, halfDayAllowed: false, sortOrder: 5 },
      { code: 'COMP_OFF', name: 'Compensatory Off', isPaid: true, color: '#06B6D4', requiresAttachment: false, halfDayAllowed: true, sortOrder: 6 },
      { code: 'LOP', name: 'Loss of Pay', isPaid: false, color: '#6B7280', requiresAttachment: false, halfDayAllowed: true, sortOrder: 7 },
    ];

    for (const lt of defaultLeaveTypes) {
      await tx.leaveType.upsert({
        where: { tenantId_code: { tenantId, code: lt.code } },
        update: {},
        create: { tenantId, ...lt },
      });
    }
  }

  private async seedHolidayTemplate(tx: any, tenantId: string): Promise<void> {
    // Get default legal entity for this tenant
    const legalEntity = await tx.legalEntity.findFirst({
      where: { tenantId, isDefault: true },
      select: { id: true },
    });

    if (!legalEntity) return;

    // Create a holiday calendar for the default legal entity
    const calendar = await tx.holidayCalendar.upsert({
      where: { tenantId_legalEntityId_name: { tenantId, legalEntityId: legalEntity.id, name: 'Default Holiday Calendar' } },
      update: {},
      create: {
        tenantId,
        legalEntityId: legalEntity.id,
        name: 'Default Holiday Calendar',
        description: 'Default national holidays for India',
        isDefault: true,
      },
    });

    // Seed common Indian national holidays (2024-2025 examples)
    const holidays = [
      { name: 'Republic Day', date: new Date('2025-01-26'), type: 'NATIONAL', isRecurring: true, month: 1, day: 26 },
      { name: 'Independence Day', date: new Date('2025-08-15'), type: 'NATIONAL', isRecurring: true, month: 8, day: 15 },
      { name: 'Gandhi Jayanti', date: new Date('2025-10-02'), type: 'NATIONAL', isRecurring: true, month: 10, day: 2 },
      { name: 'Christmas', date: new Date('2025-12-25'), type: 'NATIONAL', isRecurring: true, month: 12, day: 25 },
    ];

    for (const h of holidays) {
      await tx.holiday.upsert({
        where: { tenantId_holidayCalendarId_name_date: { tenantId, holidayCalendarId: calendar.id, name: h.name, date: h.date } },
        update: {},
        create: { tenantId, holidayCalendarId: calendar.id, ...h },
      });
    }
  }

  private async seedAttendancePolicyVersion(tx: any, tenantId: string): Promise<void> {
    // Create a default attendance policy version (GATED - not activated until policy signed)
    await tx.attendancePolicyVersion.upsert({
      where: { tenantId_version: { tenantId, version: 1 } },
      update: {},
      create: {
        tenantId,
        version: 1,
        name: 'Default Attendance Policy',
        description: 'Standard attendance policy - requires HR activation',
        isActive: false, // GATED per CF-06/GATE-03
        graceMinutes: 15,
        lateMarkThresholdMinutes: 15,
        halfDayThresholdMinutes: 240, // 4 hours
        fullDayThresholdMinutes: 480, // 8 hours
        allowedPunchWindowMinutes: 120,
        captureModes: ['WEB', 'MOBILE_GPS', 'BIOMETRIC'],
        geofenceAction: 'FLAG',
        overtimeEnabled: true,
        overtimeThresholdMinutes: 30,
        overtimeRequiresApproval: true,
        lateMarkPolicy: { enabled: true, marksPerMonth: 3, deductionDays: 0.5 },
        schemaVersion: 1,
      },
    });
  }

  private async seedWorkflowDefinitions(tx: any, tenantId: string): Promise<void> {
    const workflows = [
      {
        code: 'LEAVE_REQUEST',
        name: 'Leave Request Approval',
        description: 'Standard leave request approval flow',
        version: 1,
        isPublished: true,
        steps: [
          { stepOrder: 1, name: 'Manager Approval', approverType: 'REPORTING_MANAGER', level: 1, mode: 'ANY_ONE', conditions: {}, slaHours: 48, reminderHours: 24, escalationAction: 'ESCALATE_TO_HR' },
        ],
      },
      {
        code: 'REGULARIZATION',
        name: 'Attendance Regularization',
        description: 'Attendance correction approval flow',
        version: 1,
        isPublished: true,
        steps: [
          { stepOrder: 1, name: 'Manager Approval', approverType: 'REPORTING_MANAGER', level: 1, mode: 'ANY_ONE', conditions: {}, slaHours: 48, reminderHours: 24, escalationAction: 'ESCALATE_TO_HR' },
        ],
      },
      {
        code: 'OVERTIME_REQUEST',
        name: 'Overtime Approval',
        description: 'Overtime request approval flow',
        version: 1,
        isPublished: true,
        steps: [
          { stepOrder: 1, name: 'Manager Approval', approverType: 'REPORTING_MANAGER', level: 1, mode: 'ANY_ONE', conditions: {}, slaHours: 48, reminderHours: 24, escalationAction: 'ESCALATE_TO_HR' },
        ],
      },
      {
        code: 'PROFILE_CHANGE',
        name: 'Profile Change Request',
        description: 'Restricted field change approval flow',
        version: 1,
        isPublished: true,
        steps: [
          { stepOrder: 1, name: 'HR Approval', approverType: 'ROLE_HOLDER', roleCode: 'HR', mode: 'ANY_ONE', conditions: {}, slaHours: 72, reminderHours: 24, escalationAction: 'ESCALATE_TO_HR_HEAD' },
        ],
      },
    ];

    for (const wf of workflows) {
      const definition = await tx.workflowDefinition.upsert({
        where: { tenantId_code: { tenantId, code: wf.code } },
        update: { name: wf.name, description: wf.description },
        create: { tenantId, code: wf.code, name: wf.name, description: wf.description },
      });

      await tx.workflowVersion.upsert({
        where: { workflowDefinitionId_version: { workflowDefinitionId: definition.id, version: wf.version } },
        update: { isPublished: wf.isPublished, stepsJson: wf.steps },
        create: { workflowDefinitionId: definition.id, version: wf.version, isPublished: wf.isPublished, stepsJson: wf.steps },
      });
    }
  }

  private async seedNotificationTemplates(tx: any, tenantId: string): Promise<void> {
    const templates = [
      // Security-critical (locked, tenant cannot override)
      { 
        code: 'EMAIL_VERIFICATION', 
        name: 'Email Verification', 
        channel: 'EMAIL', 
        subject: 'Verify your email address', 
        bodyTemplate: `
<p>Hi {{userName}},</p>
<p>Welcome to HRMS! Please verify your email address by clicking the link below:</p>
<p style="text-align: center; margin: 30px 0;">
  <a href="{{verificationUrl}}" style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
    Verify Email Address
  </a>
</p>
<p>Or copy and paste this link into your browser:</p>
<p style="word-break: break-all; color: #666; font-size: 14px;">{{verificationUrl}}</p>
<p>This link expires in {{expiryHours}} hours.</p>
<p>If you didn't create an account, you can safely ignore this email.</p>
<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
<p style="color: #9ca3af; font-size: 12px;">This is an automated message from HRMS. Please do not reply.</p>
        `, 
        isLocked: true, 
        variables: ['userName', 'verificationUrl', 'expiryHours'] 
      },
      { 
        code: 'PASSWORD_RESET', 
        name: 'Password Reset', 
        channel: 'EMAIL', 
        subject: 'Reset your password', 
        bodyTemplate: `
<p>Hi {{userName}},</p>
<p>You requested a password reset. Click the link below to set a new password:</p>
<p style="text-align: center; margin: 30px 0;">
  <a href="{{resetUrl}}" style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
    Reset Password
  </a>
</p>
<p>Or copy and paste this link into your browser:</p>
<p style="word-break: break-all; color: #666; font-size: 14px;">{{resetUrl}}</p>
<p>This link expires in {{expiryMinutes}} minutes.</p>
<p>If you didn't request this, you can safely ignore this email.</p>
<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
<p style="color: #9ca3af; font-size: 12px;">This is an automated message from HRMS. Please do not reply.</p>
        `, 
        isLocked: true, 
        variables: ['userName', 'resetUrl', 'expiryMinutes'] 
      },
      { 
        code: 'USER_INVITATION', 
        name: 'User Invitation', 
        channel: 'EMAIL', 
        subject: 'Invitation to join {{tenantName}}', 
        bodyTemplate: `
<p>Hi {{userName}},</p>
<p>You've been invited to join <strong>{{tenantName}}</strong> on HRMS as a <strong>{{roleName}}</strong>.</p>
<p style="text-align: center; margin: 30px 0;">
  <a href="{{invitationUrl}}" style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
    Accept Invitation
  </a>
</p>
<p>Or copy and paste this link into your browser:</p>
<p style="word-break: break-all; color: #666; font-size: 14px;">{{invitationUrl}}</p>
<p>This invitation expires in {{expiryHours}} hours.</p>
<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
<p style="color: #9ca3af; font-size: 12px;">This is an automated message from HRMS. Please do not reply.</p>
        `, 
        isLocked: true, 
        variables: ['userName', 'tenantName', 'invitationUrl', 'roleName', 'expiryHours'] 
      },
      { 
        code: 'MFA_ENROLLMENT', 
        name: 'MFA Enrollment Required', 
        channel: 'EMAIL', 
        subject: 'MFA enrollment required', 
        bodyTemplate: `
<p>Hi {{userName}},</p>
<p>Your organization requires Multi-Factor Authentication (MFA) for security.</p>
<p style="text-align: center; margin: 30px 0;">
  <a href="{{enrollmentUrl}}" style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
    Set Up MFA
  </a>
</p>
<p>Please complete MFA setup to continue accessing your account.</p>
<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
<p style="color: #9ca3af; font-size: 12px;">This is an automated message from HRMS. Please do not reply.</p>
        `, 
        isLocked: true, 
        variables: ['userName', 'enrollmentUrl'] 
      },
      { 
        code: 'TENANT_APPROVED', 
        name: 'Tenant Approved', 
        channel: 'EMAIL', 
        subject: 'Your organization {{tenantName}} has been approved', 
        bodyTemplate: `
<p>Hi {{userName}},</p>
<p>Great news! Your organization <strong>{{tenantName}}</strong> has been approved and is now active.</p>
<p>Your 14-day free trial has started. You can now log in and start setting up your HRMS.</p>
<p style="text-align: center; margin: 30px 0;">
  <a href="{{loginUrl}}" style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
    Access HRMS
  </a>
</p>
<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
<p style="color: #9ca3af; font-size: 12px;">This is an automated message from HRMS. Please do not reply.</p>
        `, 
        isLocked: true, 
        variables: ['userName', 'tenantName', 'loginUrl'] 
      },
      { 
        code: 'TENANT_REJECTED', 
        name: 'Tenant Rejected', 
        channel: 'EMAIL', 
        subject: 'Your organization {{tenantName}} was not approved', 
        bodyTemplate: `
<p>Hi {{userName}},</p>
<p>We regret to inform you that your organization <strong>{{tenantName}}</strong> was not approved at this time.</p>
<p>Reason: {{reason}}</p>
<p>If you have questions, please contact our support team.</p>
<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
<p style="color: #9ca3af; font-size: 12px;">This is an automated message from HRMS. Please do not reply.</p>
        `, 
        isLocked: true, 
        variables: ['userName', 'tenantName', 'reason'] 
      },
      { 
        code: 'TENANT_SUSPENDED', 
        name: 'Tenant Suspended', 
        channel: 'EMAIL', 
        subject: 'Your organization {{tenantName}} has been suspended', 
        bodyTemplate: `
<p>Hi {{userName}},</p>
<p>Your organization <strong>{{tenantName}}</strong> has been suspended.</p>
<p>Reason: {{reason}}</p>
<p>Please contact support for more information.</p>
<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
<p style="color: #9ca3af; font-size: 12px;">This is an automated message from HRMS. Please do not reply.</p>
        `, 
        isLocked: true, 
        variables: ['userName', 'tenantName', 'reason'] 
      },

      // Trial & Billing (locked)
      { 
        code: 'TRIAL_ENDING_REMINDER', 
        name: 'Trial Ending Reminder', 
        channel: 'EMAIL', 
        subject: 'Your HRMS trial ends in {{daysRemaining}} days', 
        bodyTemplate: `
<p>Hi {{userName}},</p>
<p>Your trial for <strong>{{tenantName}}</strong> ends in <strong>{{daysRemaining}} days</strong> (on {{trialEndsAt}}).</p>
<p>Upgrade now to continue uninterrupted access.</p>
<p style="text-align: center; margin: 30px 0;">
  <a href="{{loginUrl}}" style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
    Upgrade Now
  </a>
</p>
<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
<p style="color: #9ca3af; font-size: 12px;">This is an automated message from HRMS. Please do not reply.</p>
        `, 
        isLocked: true, 
        variables: ['userName', 'tenantName', 'daysRemaining', 'trialEndsAt', 'loginUrl'] 
      },
      { 
        code: 'TRIAL_EXPIRED', 
        name: 'Trial Expired', 
        channel: 'EMAIL', 
        subject: 'Your HRMS trial has expired', 
        bodyTemplate: `
<p>Hi {{userName}},</p>
<p>Your trial for <strong>{{tenantName}}</strong> has expired.</p>
<p>Your account has been suspended. Upgrade to reactivate.</p>
<p style="text-align: center; margin: 30px 0;">
  <a href="{{loginUrl}}" style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
    Upgrade Now
  </a>
</p>
<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
<p style="color: #9ca3af; font-size: 12px;">This is an automated message from HRMS. Please do not reply.</p>
        `, 
        isLocked: true, 
        variables: ['userName', 'tenantName', 'loginUrl'] 
      },

      // Standard templates (tenant can override)
      { 
        code: 'LEAVE_APPLIED', 
        name: 'Leave Applied', 
        channel: 'IN_APP', 
        subject: '', 
        bodyTemplate: '{{employeeName}} applied for {{leaveType}} ({{startDate}} to {{endDate}}, {{days}} days)', 
        isLocked: false, 
        variables: ['employeeName', 'leaveType', 'startDate', 'endDate', 'days'] 
      },
      { 
        code: 'LEAVE_APPROVED', 
        name: 'Leave Approved', 
        channel: 'IN_APP', 
        subject: '', 
        bodyTemplate: 'Your {{leaveType}} request ({{startDate}} to {{endDate}}) was approved', 
        isLocked: false, 
        variables: ['employeeName', 'leaveType', 'startDate', 'endDate', 'days'] 
      },
      { 
        code: 'LEAVE_REJECTED', 
        name: 'Leave Rejected', 
        channel: 'IN_APP', 
        subject: '', 
        bodyTemplate: 'Your {{leaveType}} request ({{startDate}} to {{endDate}}) was rejected', 
        isLocked: false, 
        variables: ['employeeName', 'leaveType', 'startDate', 'endDate', 'reason'] 
      },
      { 
        code: 'REGULARIZATION_REQUESTED', 
        name: 'Regularization Requested', 
        channel: 'IN_APP', 
        subject: '', 
        bodyTemplate: '{{employeeName}} requested attendance regularization for {{date}}', 
        isLocked: false, 
        variables: ['employeeName', 'date', 'reason'] 
      },
      { 
        code: 'OVERTIME_REQUESTED', 
        name: 'Overtime Requested', 
        channel: 'IN_APP', 
        subject: '', 
        bodyTemplate: '{{employeeName}} requested {{hours}} hours of overtime on {{date}}', 
        isLocked: false, 
        variables: ['employeeName', 'date', 'hours', 'reason'] 
      },
      { 
        code: 'PAYSLIP_AVAILABLE', 
        name: 'Payslip Available', 
        channel: 'IN_APP', 
        subject: '', 
        bodyTemplate: 'Your payslip for {{period}} is available for download', 
        isLocked: false, 
        variables: ['employeeName', 'period', 'downloadUrl'] 
      },
      { 
        code: 'DOCUMENT_EXPIRING', 
        name: 'Document Expiring', 
        channel: 'IN_APP', 
        subject: '', 
        bodyTemplate: 'Your {{documentType}} expires on {{expiryDate}}. Please renew.', 
        isLocked: false, 
        variables: ['employeeName', 'documentType', 'expiryDate'] 
      },
    ];
    };

    private async seedFeatureFlags(tx: any, tenantId: string): Promise<void> {
      const flags = [
      { code: 'ATTENDANCE_RULES', name: 'Attendance Rules Engine', description: 'Enable attendance policy computation', enabled: false, isGated: true, gateName: 'GATE-03' },
      { code: 'NATIVE_PAYROLL', name: 'Native India Payroll', description: 'Enable native payroll calculation', enabled: false, isGated: true, gateName: 'GATE-04' },
      { code: 'FINANCE_CORE', name: 'Finance Core Module', description: 'Enable finance/GL module', enabled: false, isGated: true, gateName: 'GATE-05' },
      { code: 'BILLING_TAX', name: 'Billing & Tax', description: 'Enable billing automation', enabled: false, isGated: true, gateName: 'GATE-06' },
      { code: 'ADVANCED_WORKFLOWS', name: 'Advanced Workflow Builder', description: 'Visual workflow builder', enabled: false, isGated: false },
      { code: 'CUSTOM_REPORTS', name: 'Custom Report Builder', description: 'Ad-hoc report builder', enabled: false, isGated: false },
    ];

    for (const f of flags) {
      await tx.featureFlag.upsert({
        where: { tenantId_code: { tenantId, code: f.code } },
        update: { enabled: f.enabled },
        create: { tenantId, ...f },
      });
    }
  }
}