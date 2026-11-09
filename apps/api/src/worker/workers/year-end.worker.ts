import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class YearEndWorker {
  private readonly logger = new Logger('YearEndWorker');

  async process(job: any) {
    this.logger.log('Processing job in YearEndWorker');
    return { status: 'completed' };
  }
}
