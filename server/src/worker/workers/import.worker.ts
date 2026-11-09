import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ImportWorker {
  private readonly logger = new Logger('ImportWorker');

  async process(job: any) {
    this.logger.log('Processing job in ImportWorker');
    return { status: 'completed' };
  }
}
