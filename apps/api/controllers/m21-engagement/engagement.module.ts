import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { SurveyService } from './survey.service';
import { RecognitionService } from './recognition.service';


@Module({
  providers: [AnnouncementService, SurveyService, RecognitionService],
  exports: [AnnouncementService, SurveyService, RecognitionService],
})
export class EngagementModule {}
