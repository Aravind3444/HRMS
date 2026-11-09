import { Module } from '@nestjs/common';
import { LeaveTypeService } from './leave-type.service';
import { LeavePolicyService } from './leave-policy.service';
import { HolidayCalendarService } from './holiday-calendar.service';
import { LeaveLedgerService } from './leave-ledger.service';
import { LeaveApplicationService } from './leave-application.service';
import { CompOffService } from './comp-off.service';
import { YearEndService } from './year-end.service';


@Module({
  providers: [LeaveTypeService, LeavePolicyService, HolidayCalendarService, LeaveLedgerService, LeaveApplicationService, CompOffService, YearEndService],
  exports: [LeaveTypeService, LeavePolicyService, HolidayCalendarService, LeaveLedgerService, LeaveApplicationService, CompOffService, YearEndService],
})
export class LeaveModule {}
