import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationsModule } from '../modules/m24-notifications/notifications.module';
import { NotificationWorker } from './workers/notification.worker';
import { TrialReminderWorker } from './workers/trial-reminder.worker';
import { PayrollCalcWorker } from './workers/payroll-calc.worker';
import { AttendanceFinaliserWorker } from './workers/attendance-finaliser.worker';
import { LeaveAccrualWorker } from './workers/leave-accrual.worker';
import { YearEndWorker } from './workers/year-end.worker';
import { ImportWorker } from './workers/import.worker';
import { FileScanWorker } from './workers/file-scan.worker';
import { ReportExportWorker } from './workers/report-export.worker';
import { SessionRevokeWorker } from './workers/session-revoke.worker';

@Module({
  imports: [ScheduleModule.forRoot(), NotificationsModule],
  providers: [
    // NotificationWorker disabled - email notifications removed
    // NotificationWorker,
    TrialReminderWorker,
    PayrollCalcWorker,
    AttendanceFinaliserWorker,
    LeaveAccrualWorker,
    YearEndWorker,
    ImportWorker,
    FileScanWorker,
    ReportExportWorker,
    SessionRevokeWorker,
  ],
})
export class WorkerModule {}
