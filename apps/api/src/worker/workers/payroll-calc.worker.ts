import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PayrollCalcWorker {
  private readonly logger = new Logger('PayrollCalcWorker');

  async process(job: any) {
    this.logger.log('Processing job in PayrollCalcWorker');
    return { status: 'completed' };
  }
}
