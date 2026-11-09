import { Module } from '@nestjs/common';
import { CaseService } from './case.service';
import { TaskService } from './task.service';
import { PreJoiningPortalService } from './pre-joining-portal.service';


@Module({
  providers: [CaseService, TaskService, PreJoiningPortalService],
  exports: [CaseService, TaskService, PreJoiningPortalService],
})
export class OnboardingModule {}
