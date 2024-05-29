'use strict';

module.exports = {
  // Highest-level ESLint configuration file in this project
  root: true,
  env: {
    node: true,
    // Check suitable ES version for the current Node.js version: https://kangax.github.io/compat-table/es2016plus/
    es2021: true,
  },
  plugins: [],
  extends: [
    'eslint:recommended',
    // Should be the last one
    'prettier',
  ],
  overrides: [
    {
      files: ['*.js'],
      // Default ESLint parser
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest',
      },
      extends: [],
    },
    {
      files: ['*.mjs'],
      // Default ESLint parser
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      extends: [],
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        './.eslintrc.clean-code.js',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // '@typescript-eslint/explicit-module-boundary-types': [
        //   'error',
        //   { allowArgumentsExplicitlyTypedAsAny: true },
        // ],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        // Checked by @typescript-eslint/no-unused-vars
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
};
