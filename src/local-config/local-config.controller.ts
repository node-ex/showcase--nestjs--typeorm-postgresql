import { coreConfig } from '@/core/configs/core.config';
import { type MergedConfig } from '@/local-config/configs/local.config';
import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService, type ConfigType } from '@nestjs/config';

@Controller('local-config')
export class LocalConfigController {
  constructor(
    private readonly configService: ConfigService<MergedConfig, true>,
    @Inject(coreConfig.KEY)
    private injectedCoreConfig: ConfigType<typeof coreConfig>,
  ) {}

  @Get()
  getConfigValues() {
    return {
      globalSecret: this.configService.get('core.globalSecret', {
        infer: true,
      }),
      injectedGlobalSecret: this.injectedCoreConfig.globalSecret,
      localSecret: this.configService.get('localSecret', { infer: true }),
    };
  }
}
