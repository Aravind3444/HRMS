import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class PasskeyService {
  private readonly logger = new Logger(PasskeyService.name);
  constructor(private readonly prisma: PrismaService) {}

  async generateRegistrationOptions(userId: string) {
    this.logger.log(`Generate WebAuthn registration options for ${userId}`);
    return { challenge: 'sample_challenge', rp: { name: 'HRMS' } };
  }

  async verifyRegistration(userId: string, body: any) {
    this.logger.log(`Verify WebAuthn credential for ${userId}`);
    return { verified: true };
  }
}

