import { Module } from '@nestjs/common';
import { ImportService } from './import.service';
import { ExportService } from './export.service';


@Module({
  providers: [ImportService, ExportService],
  exports: [ImportService, ExportService],
})
export class ImportExportModule {}
