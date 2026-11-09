import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ReportLibraryService } from './report-library.service';
import { ExportService } from './export.service';


@Module({
  providers: [DashboardService, ReportLibraryService, ExportService],
  exports: [DashboardService, ReportLibraryService, ExportService],
})
export class ReportsModule {}
