import { Module } from '@nestjs/common';
import { LegalEntityService } from './legal-entity.service';
import { LocationService } from './location.service';
import { DepartmentService } from './department.service';
import { DesignationService } from './designation.service';
import { GradeService } from './grade.service';
import { CostCenterService } from './cost-center.service';
import { EmploymentTypeService } from './employment-type.service';
import { OrgChartService } from './org-chart.service';
import { OrgSetupWizardService } from './setup-wizard.service';
import { OrgController } from './org.controller';

@Module({
  controllers: [OrgController],
  providers: [
    LegalEntityService,
    LocationService,
    DepartmentService,
    DesignationService,
    GradeService,
    CostCenterService,
    EmploymentTypeService,
    OrgChartService,
    OrgSetupWizardService,
  ],
  exports: [
    LegalEntityService,
    LocationService,
    DepartmentService,
    DesignationService,
    GradeService,
    CostCenterService,
    EmploymentTypeService,
    OrgChartService,
    OrgSetupWizardService,
  ],
})
export class OrgModule {}
