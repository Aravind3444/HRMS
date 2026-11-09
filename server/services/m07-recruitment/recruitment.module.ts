import { Module } from '@nestjs/common';
import { RequisitionService } from './requisition.service';
import { JobService } from './job.service';
import { CandidateService } from './candidate.service';
import { PipelineService } from './pipeline.service';
import { InterviewService } from './interview.service';
import { OfferService } from './offer.service';
import { ReferralService } from './referral.service';


@Module({
  providers: [RequisitionService, JobService, CandidateService, PipelineService, InterviewService, OfferService, ReferralService],
  exports: [RequisitionService, JobService, CandidateService, PipelineService, InterviewService, OfferService, ReferralService],
})
export class RecruitmentModule {}
