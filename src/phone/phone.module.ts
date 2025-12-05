import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';

@Module({
  exports: [PhoneService],
  providers: [PhoneService],
})
export class PhoneModule {}
