import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloWorldModule } from '@/hello-world/hello-world.module';
import { coreConfig, validateCoreEnvVars } from '@/core/configs/core.config';
import { LocalConfigModule } from './local-config/local-config.module';
import { NoLocalConfigModule } from './no-local-config/no-local-config.module';

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
    HelloWorldModule,
    LocalConfigModule,
    NoLocalConfigModule,
  ],
})
export class AppModule {}
