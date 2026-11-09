import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
import { WorkerModule } from './worker/worker.module';

// All 31 Modules
import { TenantModule } from './modules/m01-tenant/tenant.module';
import { IamModule } from './modules/m02-iam/iam.module';
import { OrgModule } from './modules/m03-org/org.module';
import { EmployeeModule } from './modules/m04-employee/employee.module';
import { EssModule } from './modules/m05-ess/ess.module';
import { DocumentsModule } from './modules/m06-documents/documents.module';
import { RecruitmentModule } from './modules/m07-recruitment/recruitment.module';
import { OnboardingModule } from './modules/m08-onboarding/onboarding.module';
import { OffboardingModule } from './modules/m09-offboarding/offboarding.module';
import { AttendanceModule } from './modules/m10-attendance/attendance.module';
import { ShiftModule } from './modules/m11-shift/shift.module';
import { LeaveModule } from './modules/m12-leave/leave.module';
import { PayrollModule } from './modules/m13-payroll/payroll.module';
import { StatutoryModule } from './modules/m14-statutory/statutory.module';
import { PerformanceModule } from './modules/m15-performance/performance.module';
import { LmsModule } from './modules/m16-lms/lms.module';
import { AssetsModule } from './modules/m17-assets/assets.module';
import { HelpdeskModule } from './modules/m18-helpdesk/helpdesk.module';
import { ExpenseModule } from './modules/m19-expense/expense.module';
import { TravelModule } from './modules/m20-travel/travel.module';
import { EngagementModule } from './modules/m21-engagement/engagement.module';
import { ReportsModule } from './modules/m22-reports/reports.module';
import { AuditModule } from './modules/m23-audit/audit.module';
import { NotificationsModule } from './modules/m24-notifications/notifications.module';
import { WorkflowModule } from './modules/m25-workflow/workflow.module';
import { IntegrationsModule } from './modules/m26-integrations/integrations.module';
import { SecurityModule } from './modules/m28-security/security.module';
import { ImportExportModule } from './modules/m29-import-export/import-export.module';
import { FinanceModule } from './modules/m30-finance/finance.module';
import { AiModule } from './modules/m31-ai/ai.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),
    DatabaseModule,
    CommonModule,
    WorkerModule,
    TenantModule,
    IamModule,
    OrgModule,
    EmployeeModule,
    EssModule,
    DocumentsModule,
    RecruitmentModule,
    OnboardingModule,
    OffboardingModule,
    AttendanceModule,
    ShiftModule,
    LeaveModule,
    PayrollModule,
    StatutoryModule,
    PerformanceModule,
    LmsModule,
    AssetsModule,
    HelpdeskModule,
    ExpenseModule,
    TravelModule,
    EngagementModule,
    ReportsModule,
    AuditModule,
    NotificationsModule,
    WorkflowModule,
    IntegrationsModule,
    SecurityModule,
    ImportExportModule,
    FinanceModule,
    AiModule,
  ],
})
export class AppModule {}
