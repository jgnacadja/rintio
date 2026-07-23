import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { includeIgnoreFile } from '@eslint/compat'
import pluginJs from '@eslint/js'
import vitestEslint from '@vitest/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginImport from 'eslint-plugin-import'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

const rules = {
  'prefer-const': 'error',
  'vue/multi-word-component-names': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  'no-unused-vars': 'off', // Disable in favor of @typescript-eslint/no-unused-vars
  'no-undef': 'error',
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  'import/no-unresolved': [
    'error',
    {
      ignore: ['^#']
    }
  ],
  'import/named': 'error',
  'import/namespace': 'error',
  'import/default': 'error',
  'import/export': 'error',
  'import/order': [
    'off',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
      alphabetize: { order: 'asc', caseInsensitive: true }
    }
  ],
  'import/newline-after-import': 'off',
  'import/no-absolute-path': 'error',
  'import/no-webpack-loader-syntax': 'error',
  'import/no-self-import': 'error',
  'import/no-cycle': 'error',
  ...vitestEslint.configs.recommended.rules,
  // TypeScript specific rules
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
      caughtErrors: 'none',
      vars: 'all'
    }
  ]
}
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    plugins: {
      vitest: vitestEslint,
      import: eslintPluginImport,
      '@typescript-eslint': tseslint.plugin
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: resolve(__dirname, './tsconfig.json')
        },
        node: true,
        nuxt: {
          extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
        }
      },
      'import/core-modules': ['#imports']
    },
    rules: {
      ...rules,
      // Add specific rules for TypeScript files
      ...(tseslint.configs.recommended.rules || {})
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...vitestEslint.environments.env.globals,
        // Nuxt auto-imports
        defineNuxtConfig: 'readonly',
        defineNuxtPlugin: 'readonly',
        defineNuxtRouteMiddleware: 'readonly',
        definePageMeta: 'readonly',
        useAsyncData: 'readonly',
        useFetch: 'readonly',
        useRequestURL: 'readonly',
        useNuxtApp: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useRuntimeConfig: 'readonly',
        navigateTo: 'readonly',
        $fetch: 'readonly',
        defineEventHandler: 'readonly',
        getQuery: 'readonly',
        // Vue auto-imports
        ref: 'readonly',
        computed: 'readonly',
        reactive: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        watch: 'readonly',
        // TypeScript types
        PropType: 'readonly',
        Ref: 'readonly',
        VoidFunction: 'readonly'
      }
    }
  },
  // TypeScript specific configuration
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          caughtErrors: 'none',
          vars: 'all'
        }
      ]
    }
  },
  // Special rule for enum files
  {
    files: ['**/types/enums/**/*.ts'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  },
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    ignores: [
      '**/node_modules/**',
      '.nuxt/**',
      'dist/**',
      'coverage/**',
      'app.vue',
      'playwright-report/',
      'vitest.config.ts.timestamp-*'
    ]
  },
  includeIgnoreFile(gitignorePath)
]
