import { Module } from '@nestjs/common';
import { ShiftTemplateService } from './shift-template.service';
import { RosterService } from './roster.service';
import { SwapService } from './swap.service';


@Module({
  providers: [ShiftTemplateService, RosterService, SwapService],
  exports: [ShiftTemplateService, RosterService, SwapService],
})
export class ShiftModule {}
