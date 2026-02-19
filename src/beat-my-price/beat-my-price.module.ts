import { Module } from '@nestjs/common';
import { BeatMyPriceController } from './beat-my-price.controller';
import { BeatMyPriceService } from './beat-my-price.service';

@Module({
  controllers: [BeatMyPriceController],
  providers: [BeatMyPriceService],
})
export class BeatMyPriceModule {}
