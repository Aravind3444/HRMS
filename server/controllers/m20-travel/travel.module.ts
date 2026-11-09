import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { BookingService } from './booking.service';


@Module({
  providers: [RequestService, BookingService],
  exports: [RequestService, BookingService],
})
export class TravelModule {}
