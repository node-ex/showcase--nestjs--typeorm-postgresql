import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloWorldModule } from '@/hello-world/hello-world.module';
import { coreConfig, validateCoreEnvVars } from '@/core/configs/core.config';

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
  ],
})
export class AppModule {}
