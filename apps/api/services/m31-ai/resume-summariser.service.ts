import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ResumeSummariserService {
  private readonly logger = new Logger(ResumeSummariserService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ResumeSummariserService', status: 'operational' };
  }
}
