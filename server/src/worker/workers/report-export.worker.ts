import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ReportExportWorker {
  private readonly logger = new Logger('ReportExportWorker');

  async process(job: any) {
    this.logger.log('Processing job in ReportExportWorker');
    return { status: 'completed' };
  }
}
