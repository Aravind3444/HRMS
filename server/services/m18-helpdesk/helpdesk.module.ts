import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { SlaService } from './sla.service';
import { KnowledgeBaseService } from './knowledge-base.service';


@Module({
  providers: [TicketService, SlaService, KnowledgeBaseService],
  exports: [TicketService, SlaService, KnowledgeBaseService],
})
export class HelpdeskModule {}
