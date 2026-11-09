import { Module } from '@nestjs/common';
import { ReviewCycleService } from './review-cycle.service';
import { GoalService } from './goal.service';
import { KpiService } from './kpi.service';
import { CheckinService } from './checkin.service';
import { FeedbackService } from './feedback.service';
import { ReviewService } from './review.service';
import { CalibrationService } from './calibration.service';
import { PipService } from './pip.service';


@Module({
  providers: [ReviewCycleService, GoalService, KpiService, CheckinService, FeedbackService, ReviewService, CalibrationService, PipService],
  exports: [ReviewCycleService, GoalService, KpiService, CheckinService, FeedbackService, ReviewService, CalibrationService, PipService],
})
export class PerformanceModule {}
