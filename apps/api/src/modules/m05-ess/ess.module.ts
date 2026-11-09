import { Module } from '@nestjs/common';
import { EssController } from './ess.controller';
import { ProfileService } from './profile.service';
import { DashboardService } from './dashboard.service';

@Module({
  controllers: [EssController],
  providers: [ProfileService, DashboardService],
  exports: [ProfileService, DashboardService],
})
export class EssModule {}
