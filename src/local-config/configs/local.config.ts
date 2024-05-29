import { NamespacedCoreConfig } from '@/core/configs/core.config';
import { validateEnvVars } from '@/core/configs/validate.utils';
import { z } from 'zod';

/**
 * ###########
 * ### Env ###
 * ###########
 */

const LOCAL_ENV_VARS = {
  LOCAL_SECRET: 'LOCAL_SECRET',
} as const;

const LocalEnvVarsSchema = z.object({
  [LOCAL_ENV_VARS.LOCAL_SECRET]: z.string(),
});

export function validateLocalEnvVars(env: Record<string, string | undefined>) {
  return validateEnvVars(LocalEnvVarsSchema, env);
}

/**
 * ##############
 * ### Config ###
 * ##############
 */

const LocalConfigSchema = z.object({
  localSecret: z.string(),
});

type LocalConfig = z.infer<typeof LocalConfigSchema>;

export type MergedConfig = LocalConfig & NamespacedCoreConfig;

export const localConfig = () =>
  ({
    localSecret: process.env[LOCAL_ENV_VARS.LOCAL_SECRET],
  }) as LocalConfig;
