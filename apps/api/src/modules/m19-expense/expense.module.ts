import { Module } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { ClaimService } from './claim.service';
import { AdvanceService } from './advance.service';


@Module({
  providers: [PolicyService, ClaimService, AdvanceService],
  exports: [PolicyService, ClaimService, AdvanceService],
})
export class ExpenseModule {}
