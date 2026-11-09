import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class SurveyService {
  private readonly logger = new Logger(SurveyService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'SurveyService', status: 'operational' };
  }
}
