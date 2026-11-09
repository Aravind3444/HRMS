import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { EnrollmentService } from './enrollment.service';
import { AssessmentService } from './assessment.service';
import { CertificationService } from './certification.service';
import { TrainingRequestService } from './training-request.service';


@Module({
  providers: [CourseService, EnrollmentService, AssessmentService, CertificationService, TrainingRequestService],
  exports: [CourseService, EnrollmentService, AssessmentService, CertificationService, TrainingRequestService],
})
export class LmsModule {}
