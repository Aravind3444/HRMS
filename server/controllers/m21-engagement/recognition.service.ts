import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class RecognitionService {
  private readonly logger = new Logger(RecognitionService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'RecognitionService', status: 'operational' };
  }
}
