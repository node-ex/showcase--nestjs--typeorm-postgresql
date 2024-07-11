/**
 * This file is used to create a TypeORM DataSource instance to use with
 * `typeorm` CLI command.
 */

import { NestFactory } from '@nestjs/core';
import {
  ConfigModule,
  // ConfigService
} from '@nestjs/config';
import { DataSourceService } from '@/modules/data-source/services/data-source/data-source.service';
import { CliDataSourceModule } from '@/modules/cli-data-source/cli-data-source.module';
import { DataSource } from 'typeorm';

async function getDataSource() {
  await ConfigModule.envVariablesLoaded;
  const app = await NestFactory.createApplicationContext(CliDataSourceModule, {
    logger: false,
  });
  const dataSourceService = app.get(DataSourceService);
  const dataSource = new DataSource(dataSourceService.getDataSourceOptions());

  return dataSource;
}

// TypeORM accepts Promise<DataSource> as a data source
// https://github.com/typeorm/typeorm/blob/master/src/commands/CommandUtils.ts#L42
export const AppDataSource = getDataSource();
