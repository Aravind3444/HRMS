import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AssessmentService {
  private readonly logger = new Logger(AssessmentService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'AssessmentService', status: 'operational' };
  }
}
