import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../database/prisma.service';
import { Resend } from 'resend';
import * as nodemailer from 'nodemailer';

interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly resend: Resend | null;
  private readonly nodemailer: nodemailer.Transporter | null;
  private readonly fromEmail: string;
  private readonly provider: 'resend' | 'nodemailer' | 'mock';

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const resendApiKey = this.configService.get<string>('RESEND_API_KEY');
    const emailProvider = this.configService.get<string>('EMAIL_PROVIDER') || 'mock';
    this.fromEmail = this.configService.get<string>('FROM_EMAIL') || 'noreply@hrms.local';

    if (emailProvider === 'resend' && resendApiKey) {
      this.resend = new Resend(resendApiKey);
      this.provider = 'resend';
    } else if (emailProvider === 'nodemailer' || emailProvider === 'mailhog') {
      const host = this.configService.get<string>('SMTP_HOST') || 'localhost';
      const port = this.configService.get<number>('SMTP_PORT') || 1025;
      const user = this.configService.get<string>('SMTP_USER');
      const pass = this.configService.get<string>('SMTP_PASS');

      this.nodemailer = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: user && pass ? { user, pass } : undefined,
        ignoreTLS: true,
      });
      this.provider = 'nodemailer';
    } else {
      this.provider = 'mock';
    }

    this.logger.log(`EmailService initialized with provider: ${this.provider}`);
  }

  async healthCheck() {
    return { service: 'EmailService', status: 'operational', provider: this.provider };
  }

  async sendTemplateEmail(
    to: string | string[],
    templateCode: string,
    variables: Record<string, unknown>,
    tenantId?: string,
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const template = await this.getTemplate(templateCode, tenantId);
    if (!template) {
      this.logger.warn(`Email template ${templateCode} not found for tenant ${tenantId}`);
      return { success: false, error: 'Template not found' };
    }

    const rendered = this.renderTemplate(template, variables);
    return this.sendEmail(to, rendered.subject, rendered.html, rendered.text);
  }

  async sendEmail(
    to: string | string[],
    subject: string,
    html: string,
    text?: string,
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      const recipients = Array.isArray(to) ? to : [to];

      if (this.provider === 'resend' && this.resend) {
        const result = await this.resend.emails.send({
          from: this.fromEmail,
          to: recipients,
          subject,
          html,
          text,
        });
        this.logger.log(`Email sent via Resend to ${recipients.join(', ')}: ${subject} (ID: ${result.data?.id})`);
        return { success: true, messageId: result.data?.id };
      }

      if (this.provider === 'nodemailer' && this.nodemailer) {
        const result = await this.nodemailer.sendMail({
          from: this.fromEmail,
          to: recipients.join(', '),
          subject,
          html,
          text,
        });
        this.logger.log(`Email sent via SMTP to ${recipients.join(', ')}: ${subject} (ID: ${result.messageId})`);
        return { success: true, messageId: result.messageId };
      }

      // Mock mode
      this.logger.log(`[Mock Mode] Email to ${recipients.join(', ')}: ${subject}`);
      this.logger.log(`[Mock Mode] HTML: ${html.substring(0, 200)}...`);
      return { success: true, messageId: 'mock-mode-' + Date.now() };
    } catch (error) {
      this.logger.error(`Failed to send email to ${Array.isArray(to) ? to.join(', ') : to}: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  private async getTemplate(code: string, tenantId?: string): Promise<EmailTemplate | null> {
    if (tenantId) {
      const tenantTemplate = await this.prisma.notificationTemplate.findUnique({
        where: { tenantId_code: { tenantId, code } },
      });
      if (tenantTemplate) return this.templateToEmailTemplate(tenantTemplate);
    }

    // For system templates (tenantId = null), use raw query to avoid Prisma type issues
    const systemTemplate = await this.prisma.$queryRaw<Array<{
      id: string;
      tenantId: string | null;
      code: string;
      name: string;
      channel: string;
      subject: string;
      bodyTemplate: string;
      isLocked: boolean;
      variablesJson: Record<string, unknown>;
      createdAt: Date;
      updatedAt: Date;
    }>>`
      SELECT * FROM "notification_templates" 
      WHERE "code" = ${code} AND "tenant_id" IS NULL 
      LIMIT 1
    `;
    if (systemTemplate && systemTemplate.length > 0) {
      return this.templateToEmailTemplate(systemTemplate[0]);
    }

    return null;
  }

  private renderTemplate(template: EmailTemplate, variables: Record<string, unknown>): EmailTemplate {
    let subject = template.subject;
    let html = template.html;
    let text = template.text;

    for (const [key, val] of Object.entries(variables)) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      const strVal = String(val ?? '');
      subject = subject.replace(regex, strVal);
      html = html.replace(regex, strVal);
      text = text.replace(regex, strVal);
    }

    // Generate final HTML and text with the rendered content
    const finalHtml = this.generateHtml(html, variables);
    const finalText = this.generateText(text, variables);

    return { subject, html: finalHtml, text: finalText };
  }

  private templateToEmailTemplate(template: any): EmailTemplate {
    return {
      subject: template.subject || 'HRMS Notification',
      html: this.generateHtml(template.bodyTemplate, template.variablesJson as Record<string, unknown>),
      text: this.generateText(template.bodyTemplate, template.variablesJson as Record<string, unknown>),
    };
  }

  private generateHtml(bodyTemplate: string, variables?: Record<string, unknown>): string {
    let content = bodyTemplate;
    
    // Replace variables in body template
    if (variables) {
      for (const [key, val] of Object.entries(variables)) {
        const regex = new RegExp(`{{${key}}}`, 'g');
        const strVal = String(val ?? '');
        content = content.replace(regex, strVal);
      }
    }
    
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">HRMS</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            ${content}
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #9ca3af; font-size: 12px; text-align: center;">
              This is an automated message from HRMS. Please do not reply.
            </p>
          </div>
        </body>
      </html>
    `;
  }

  private generateText(bodyTemplate: string, variables?: Record<string, unknown>): string {
    let content = bodyTemplate;
    
    if (variables) {
      for (const [key, val] of Object.entries(variables)) {
        const regex = new RegExp(`{{${key}}}`, 'g');
        const strVal = String(val ?? '');
        content = content.replace(regex, strVal);
      }
    }
    
    return `HRMS Notification\n\n${content}\n\n---\nThis is an automated message from HRMS. Please do not reply.`;
  }
}