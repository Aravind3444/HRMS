import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { AllocationService } from './allocation.service';
import { ReturnService } from './return.service';


@Module({
  providers: [CatalogService, AllocationService, ReturnService],
  exports: [CatalogService, AllocationService, ReturnService],
})
export class AssetsModule {}
