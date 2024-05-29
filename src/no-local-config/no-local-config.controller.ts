import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('no-local-config')
export class NoLocalConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getConfigValues() {
    return {
      globalSecret: this.configService.get<string>('core.globalSecret'),
      globalSecretFromEnv: this.configService.get<string>('GLOBAL_SECRET'),
      localSecret: this.configService.get<string>('localSecret'),
    };
  }
}
