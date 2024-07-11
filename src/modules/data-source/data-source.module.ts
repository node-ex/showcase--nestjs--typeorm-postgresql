import { Module } from '@nestjs/common';
import { DataSourceService } from '@/modules/data-source/services/data-source/data-source.service';

@Module({
  imports: [],
  providers: [DataSourceService],
  exports: [DataSourceService],
})
export class DataSourceModule {}
