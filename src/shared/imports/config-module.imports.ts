import { coreConfig, validateCoreEnvVars } from '@/shared/configs/core.config';
import { ConfigModule } from '@nestjs/config';

export const configModuleImports = [
  ConfigModule.forRoot({
    load: [coreConfig],
    validate: validateCoreEnvVars,
    // No need to import in other modules
    isGlobal: true,
    expandVariables: true,
    // cache: true,
  }),
];
