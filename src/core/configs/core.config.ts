import { validateEnvVars } from '@/core/configs/validate.utils';
import { registerAs } from '@nestjs/config';
import { z } from 'zod';

/**
 * ###########
 * ### Env ###
 * ###########
 */

const CORE_ENV_VARS = {
  GLOBAL_SECRET: 'GLOBAL_SECRET',
} as const;

const CoreEnvVarsSchema = z.object({
  [CORE_ENV_VARS.GLOBAL_SECRET]: z.string(),
});

export function validateCoreEnvVars(env: Record<string, string | undefined>) {
  return validateEnvVars(CoreEnvVarsSchema, env);
}

/**
 * ##############
 * ### Config ###
 * ##############
 */

const CORE_CONFIG_NAMESPACE = 'core';

const CoreConfigSchema = z.object({
  globalSecret: z.string(),
});

type CoreConfig = z.infer<typeof CoreConfigSchema>;

export interface NamespacedCoreConfig {
  [CORE_CONFIG_NAMESPACE]: CoreConfig;
}

export const coreConfig = registerAs(
  CORE_CONFIG_NAMESPACE,
  () =>
    ({
      globalSecret: process.env[CORE_ENV_VARS.GLOBAL_SECRET],
    }) as CoreConfig,
);
