import { Module } from '@nestjs/common';
import { CoaService } from './coa.service';
import { JournalService } from './journal.service';


@Module({
  providers: [CoaService, JournalService],
  exports: [CoaService, JournalService],
})
export class FinanceModule {}
