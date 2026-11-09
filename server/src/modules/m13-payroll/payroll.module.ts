import { Module } from '@nestjs/common';
import { ComponentService } from './component.service';
import { SalaryStructureService } from './salary-structure.service';
import { CompensationService } from './compensation.service';
import { PayrollPeriodService } from './payroll-period.service';
import { PayrollRunService } from './payroll-run.service';
import { PayslipService } from './payslip.service';
import { BankFileService } from './bank-file.service';
import { LoanService } from './loan.service';
import { FnfService } from './fnf.service';
import { PayrollExchangeService } from './payroll-exchange.service';
import { GlExportService } from './gl-export.service';


@Module({
  providers: [ComponentService, SalaryStructureService, CompensationService, PayrollPeriodService, PayrollRunService, PayslipService, BankFileService, LoanService, FnfService, PayrollExchangeService, GlExportService],
  exports: [ComponentService, SalaryStructureService, CompensationService, PayrollPeriodService, PayrollRunService, PayslipService, BankFileService, LoanService, FnfService, PayrollExchangeService, GlExportService],
})
export class PayrollModule {}
