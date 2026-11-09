import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class LetterService {
  private readonly logger = new Logger(LetterService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'LetterService', status: 'operational' };
  }
}
