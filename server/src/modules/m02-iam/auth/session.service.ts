import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import * as crypto from 'crypto';
import { Response } from 'express';

const ACCESS_TOKEN_COOKIE = 'hrms_access_token';
const REFRESH_TOKEN_COOKIE = 'hrms_refresh_token';
const DEFAULT_SESSION_TTL_HOURS = 12;

@Injectable()
export class SessionService {
  private readonly logger = new Logger(SessionService.name);

  constructor(private readonly prisma: PrismaService) {}

  async createSession(userId: string, res: Response, sessionTtlHours: number = DEFAULT_SESSION_TTL_HOURS): Promise<void> {
    const rawRefreshToken = crypto.randomBytes(32).toString('hex');
    const refreshTokenHash = crypto.createHash('sha256').update(rawRefreshToken).digest('hex');
    const sessionFamilyId = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + sessionTtlHours * 60 * 60 * 1000);

    await this.prisma.userSession.create({
      data: { userId, refreshTokenHash, sessionFamilyId, expiresAt },
    });

    this.setSessionCookies(userId, rawRefreshToken, res, sessionTtlHours);
  }

  async rotateSession(rawRefreshToken: string, res: Response, sessionTtlHours: number = DEFAULT_SESSION_TTL_HOURS) {
    const tokenHash = crypto.createHash('sha256').update(rawRefreshToken).digest('hex');
    const session = await this.prisma.userSession.findFirst({
      where: { refreshTokenHash: tokenHash, revokedAt: null },
    });

    if (!session || session.expiresAt < new Date()) {
      if (session) {
        await this.prisma.userSession.updateMany({
          where: { sessionFamilyId: session.sessionFamilyId },
          data: { revokedAt: new Date(), revocationReason: 'token_reuse' },
        });
      }
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    await this.prisma.userSession.update({
      where: { id: session.id },
      data: { revokedAt: new Date(), revocationReason: 'rotated' },
    });

    const newRawToken = crypto.randomBytes(32).toString('hex');
    const newHash = crypto.createHash('sha256').update(newRawToken).digest('hex');
    const expiresAt = new Date(Date.now() + sessionTtlHours * 60 * 60 * 1000);

    await this.prisma.userSession.create({
      data: {
        userId: session.userId,
        refreshTokenHash: newHash,
        sessionFamilyId: session.sessionFamilyId,
        expiresAt,
      },
    });

    this.setSessionCookies(session.userId, newRawToken, res, sessionTtlHours);
    return { success: true };
  }

  private setSessionCookies(userId: string, rawRefreshToken: string, res: Response, sessionTtlHours: number) {
    const cookieOpts = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      path: '/',
    };
    // Access token matches session TTL or 24 hours so developers don't get 401s during active usage
    const accessTtlHours = Math.max(sessionTtlHours, 24);
    res.cookie(ACCESS_TOKEN_COOKIE, userId, { ...cookieOpts, maxAge: accessTtlHours * 60 * 60 * 1000 });
    res.cookie(REFRESH_TOKEN_COOKIE, rawRefreshToken, { ...cookieOpts, maxAge: sessionTtlHours * 60 * 60 * 1000 });
  }
}
