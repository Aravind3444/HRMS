import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class SsoService {
  private readonly logger = new Logger(SsoService.name);
  constructor(private readonly prisma: PrismaService) {}

  async handleSamlResponse(samlPayload: any) {
    this.logger.log('SAML SSO callback received');
    return { success: true };
  }

  async handleOidcCallback(code: string) {
    this.logger.log('OIDC callback received');
    return { success: true };
  }
}

