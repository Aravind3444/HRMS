import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDocumentService } from './employee-document.service';
import { EmployeeEmergencyContactService } from './employee-emergency-contact.service';
import { EmployeeBankDetailService } from './employee-bank-detail.service';
import { EmployeeTaxInfoService } from './employee-tax-info.service';
import { EmployeeController } from './employee.controller';

@Module({
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    EmployeeDocumentService,
    EmployeeEmergencyContactService,
    EmployeeBankDetailService,
    EmployeeTaxInfoService,
  ],
  exports: [
    EmployeeService,
    EmployeeDocumentService,
    EmployeeEmergencyContactService,
    EmployeeBankDetailService,
    EmployeeTaxInfoService,
  ],
})
export class EmployeeModule {}
