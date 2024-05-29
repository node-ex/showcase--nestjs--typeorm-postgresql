import { Module } from '@nestjs/common';
import { NoLocalConfigController } from './no-local-config.controller';

@Module({
  controllers: [NoLocalConfigController]
})
export class NoLocalConfigModule {}
