import { DataSourceOptions } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { coreConfig } from '@/shared/configs/core.config';
import { ConfigType } from '@nestjs/config';
import path from 'path';
import { CoffeeEntity } from '@/modules/typeorm/entities/coffee.entity';

@Injectable()
export class DataSourceService {
  constructor(
    @Inject(coreConfig.KEY)
    private injectedCoreConfig: ConfigType<typeof coreConfig>,
  ) {}

  getDataSourceOptions(): DataSourceOptions {
    return {
      type: 'postgres',
      host: this.injectedCoreConfig.db.host,
      port: this.injectedCoreConfig.db.port,
      username: this.injectedCoreConfig.db.username,
      password: this.injectedCoreConfig.db.password,
      database: this.injectedCoreConfig.db.database,
      // Its not ok to use paths here, because JS code would import TS code
      // entities: [path.resolve(__dirname, '..', '..', '..', 'typeorm', 'entities', '*.ts')],
      entities: [CoffeeEntity],
      // Its ok to use paths here, because migrations are run using ts-node
      migrations: [
        path.resolve(__dirname, '..', '..', '..', '..', 'migrations', '*.ts'),
      ],
      synchronize: this.injectedCoreConfig.db.synchronize,
    };
  }
}
