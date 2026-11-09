import { Module } from '@nestjs/common';
import { ResignationService } from './resignation.service';
import { TerminationService } from './termination.service';
import { ClearanceService } from './clearance.service';
import { ExitInterviewService } from './exit-interview.service';


@Module({
  providers: [ResignationService, TerminationService, ClearanceService, ExitInterviewService],
  exports: [ResignationService, TerminationService, ClearanceService, ExitInterviewService],
})
export class OffboardingModule {}
