import {
  localConfig,
  validateLocalEnvVars,
} from '@/local-config/configs/local.config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LocalConfigController } from './local-config.controller';

@Module({
  imports: [ConfigModule.forFeature(localConfig)],
  controllers: [LocalConfigController],
})
export class LocalConfigModule {
  constructor() {
    validateLocalEnvVars(process.env);
  }
}
