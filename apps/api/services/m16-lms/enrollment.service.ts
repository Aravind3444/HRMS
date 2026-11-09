import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class EnrollmentService {
  private readonly logger = new Logger(EnrollmentService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'EnrollmentService', status: 'operational' };
  }
}
