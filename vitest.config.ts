import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue() as any],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
    include: ['**/*.test.{js,ts,vue}'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/cypress/**',
      '**/playwright/**',
      'e2e/**'
    ],
    reporters: ['default', 'github-actions', 'vitest-sonar-reporter'],
    outputFile: {
      'vitest-sonar-reporter': 'coverage/sonar-report.xml'
    },
    watch: false,
    coverage: {
      enabled: true,
      provider: 'v8',
      include: [
        '**/helpers/*.{js,ts,vue}',
        '**/pages/**/*.{js,ts,vue}',
        '**/components/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/stores/**/*.{js,ts,vue}',
        '**/composables/**/*.{js,ts,vue}'
      ],
      reporter: ['text', ['lcov', { file: 'lcov.info' }]]
    },
    alias: {
      '@/': new URL('./', import.meta.url).pathname,
      '~/': new URL('./', import.meta.url).pathname,
      '#imports': new URL('./mocks/imports-stub.ts', import.meta.url).pathname
    }
  }
})
