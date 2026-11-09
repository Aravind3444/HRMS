import { Module } from '@nestjs/common';
import { PolicyQaService } from './policy-qa.service';
import { ResumeSummariserService } from './resume-summariser.service';
import { ReviewAssistService } from './review-assist.service';


@Module({
  providers: [PolicyQaService, ResumeSummariserService, ReviewAssistService],
  exports: [PolicyQaService, ResumeSummariserService, ReviewAssistService],
})
export class AiModule {}
