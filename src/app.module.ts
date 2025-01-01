import { Module } from '@nestjs/common';
import { FarmsModule } from './farms/farms.module';


@Module({
  imports: [FarmsModule],
  controllers: [],
  providers: [],
  exports: [],
})

export class AppModule {}
