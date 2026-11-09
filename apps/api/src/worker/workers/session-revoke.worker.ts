import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SessionRevokeWorker {
  private readonly logger = new Logger('SessionRevokeWorker');

  async process(job: any) {
    this.logger.log('Processing job in SessionRevokeWorker');
    return { status: 'completed' };
  }
}
