import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AttendanceFinaliserWorker {
  private readonly logger = new Logger('AttendanceFinaliserWorker');

  async process(job: any) {
    this.logger.log('Processing job in AttendanceFinaliserWorker');
    return { status: 'completed' };
  }
}
