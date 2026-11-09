import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../../database/prisma.service';
import Redis from 'ioredis';

@ApiTags('health')
@Controller('health')
export class HealthController {
  private redisClient: Redis;

  constructor(private readonly prisma: PrismaService) {
    this.redisClient = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
      lazyConnect: true,
      maxRetriesPerRequest: 1,
    });
  }

  @Get()
  @ApiOperation({ summary: 'Health check — DB + Redis' })
  async check() {
    const startTime = Date.now();
    let dbStatus: 'connected' | 'disconnected' = 'disconnected';
    let latencyMs = 0;

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      dbStatus = 'connected';
      latencyMs = Date.now() - startTime;
    } catch {
      dbStatus = 'disconnected';
    }

    let redisStatus: 'connected' | 'disconnected' = 'disconnected';
    try {
      if (this.redisClient.status === 'wait') {
        await this.redisClient.connect();
      }
      const pingRes = await this.redisClient.ping();
      if (pingRes === 'PONG') redisStatus = 'connected';
    } catch {
      redisStatus = 'disconnected';
    }

    const isHealthy = dbStatus === 'connected' && redisStatus === 'connected';
    return {
      status: isHealthy ? 'ok' : 'degraded',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: { status: dbStatus, latencyMs },
      redis: { status: redisStatus },
      version: '1.0.0',
    };
  }
}
