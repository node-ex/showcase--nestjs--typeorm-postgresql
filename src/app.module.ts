import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { HelloWorldModule } from '@/hello-world/hello-world.module';
import { coreConfig, validateCoreEnvVars } from '@/core/configs/core.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormModule } from './typeorm/typeorm.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [coreConfig],
      validate: validateCoreEnvVars,
      // No need to import in other modules
      isGlobal: true,
      expandVariables: true,
      // cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (injectedCoreConfig: ConfigType<typeof coreConfig>) => ({
        type: 'postgres',
        host: injectedCoreConfig.db.host,
        port: injectedCoreConfig.db.port,
        username: injectedCoreConfig.db.username,
        password: injectedCoreConfig.db.password,
        database: injectedCoreConfig.db.database,
        entities: [],
        synchronize: injectedCoreConfig.db.synchronize,
      }),
      inject: [coreConfig.KEY],
    }),
    HelloWorldModule,
    TypeormModule,
  ],
})
export class AppModule {}
