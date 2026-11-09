import { Module } from '@nestjs/common';
import { DefinitionService } from './definition.service';
import { InstanceService } from './instance.service';
import { TaskService } from './task.service';
import { DelegationService } from './delegation.service';
import { SlaService } from './sla.service';


@Module({
  providers: [DefinitionService, InstanceService, TaskService, DelegationService, SlaService],
  exports: [DefinitionService, InstanceService, TaskService, DelegationService, SlaService],
})
export class WorkflowModule {}
