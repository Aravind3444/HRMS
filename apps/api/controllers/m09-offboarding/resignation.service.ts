import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ResignationService {
  private readonly logger = new Logger(ResignationService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ResignationService', status: 'operational' };
  }
}
