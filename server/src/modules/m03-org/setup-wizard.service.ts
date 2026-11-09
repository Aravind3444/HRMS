import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class OrgSetupWizardService {
  private readonly logger = new Logger(OrgSetupWizardService.name);
  constructor(private readonly prisma: PrismaService) {}

  async getStatus(tenantId: string) {
    return { completed: false, currentStep: 'entities' };
  }
}

