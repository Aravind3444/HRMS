import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { DocumentService } from './document.service';
import { PolicyService } from './policy.service';
import { LetterService } from './letter.service';
import { EsignService } from './esign.service';


@Module({
  providers: [FileService, DocumentService, PolicyService, LetterService, EsignService],
  exports: [FileService, DocumentService, PolicyService, LetterService, EsignService],
})
export class DocumentsModule {}
