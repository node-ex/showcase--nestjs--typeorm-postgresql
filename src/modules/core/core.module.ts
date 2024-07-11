import { Module } from '@nestjs/common';
import { HelloWorldModule } from '@/modules/hello-world/hello-world.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormModule } from '@/modules/typeorm/typeorm.module';
import { DataSourceService } from '@/modules/data-source/services/data-source/data-source.service';
import { DataSourceModule } from '@/modules/data-source/data-source.module';
import { configModuleImports } from '@/shared/imports/config-module.imports';

@Module({
  imports: [
    ...configModuleImports,
    TypeOrmModule.forRootAsync({
      imports: [DataSourceModule],
      useFactory: (dataSourceService: DataSourceService) =>
        dataSourceService.getDataSourceOptions(),
      inject: [DataSourceService],
    }),
    HelloWorldModule,
    TypeormModule,
  ],
})
export class CoreModule {}
