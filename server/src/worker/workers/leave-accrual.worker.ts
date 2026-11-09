import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LeaveAccrualWorker {
  private readonly logger = new Logger('LeaveAccrualWorker');

  async process(job: any) {
    this.logger.log('Processing job in LeaveAccrualWorker');
    return { status: 'completed' };
  }
}
