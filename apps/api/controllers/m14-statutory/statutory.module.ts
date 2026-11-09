import { Module } from '@nestjs/common';
import { RuleSetService } from './rule-set.service';
import { PfService } from './pf.service';
import { EsiService } from './esi.service';
import { PtService } from './pt.service';
import { LwfService } from './lwf.service';
import { TdsService } from './tds.service';
import { InvestmentDeclarationService } from './investment-declaration.service';
import { Form16Service } from './form16.service';
import { Form24qService } from './form24q.service';
import { ComplianceCalendarService } from './compliance-calendar.service';


@Module({
  providers: [RuleSetService, PfService, EsiService, PtService, LwfService, TdsService, InvestmentDeclarationService, Form16Service, Form24qService, ComplianceCalendarService],
  exports: [RuleSetService, PfService, EsiService, PtService, LwfService, TdsService, InvestmentDeclarationService, Form16Service, Form24qService, ComplianceCalendarService],
})
export class StatutoryModule {}
