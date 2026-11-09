import { Module } from '@nestjs/common';
import { PunchService } from './punch.service';
import { AttendanceDayService } from './attendance-day.service';
import { PolicyService } from './policy.service';
import { RegularizationService } from './regularization.service';
import { OvertimeService } from './overtime.service';
import { DeviceSyncService } from './device-sync.service';
import { TimesheetService } from './timesheet.service';


@Module({
  providers: [PunchService, AttendanceDayService, PolicyService, RegularizationService, OvertimeService, DeviceSyncService, TimesheetService],
  exports: [PunchService, AttendanceDayService, PolicyService, RegularizationService, OvertimeService, DeviceSyncService, TimesheetService],
})
export class AttendanceModule {}
