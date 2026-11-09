import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FileScanWorker {
  private readonly logger = new Logger('FileScanWorker');

  async process(job: any) {
    this.logger.log('Processing job in FileScanWorker');
    return { status: 'completed' };
  }
}
