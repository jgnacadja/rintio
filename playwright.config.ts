import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

const chromiumLaunchOptions = {
  launchOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  }
}

export default defineConfig<ConfigOptions>({
  testDir: './tests/e2e',
  snapshotDir: './tests/e2e/__no_regression__snapshots__',
  testMatch: '**/*.spec.ts',
  timeout: 90 * 1000, // 90 seconds
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,
  reporter: 'html',
  expect: {
    toHaveScreenshot: {
      stylePath: './tests/e2e/screenshoot.css',
      // Disable animations and transitions during screenshots for stability
      animations: 'disabled',
      // Compare by ratio to avoid tiny cross-platform pixel differences
      maxDiffPixelRatio: 0.01
    },
    toMatchSnapshot: {
      // An acceptable ratio of pixels that are different to the
      // total amount of pixels, between 0 and 1.
      maxDiffPixelRatio: 0.1
    }
  },
  use: {
    trace: 'on-first-retry',
    // Normalize rendering and behavior across environments
    colorScheme: 'light',
    timezoneId: 'UTC',
    locale: 'fr-FR',
    serviceWorkers: 'block',
    nuxt: {
      rootDir: fileURLToPath(new URL('.', import.meta.url))
    }
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        ...chromiumLaunchOptions
      }
    },
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] }
    },
    {
      name: 'Tablet Android',
      use: {
        ...devices['Galaxy Tab S9 landscape'],
        ...chromiumLaunchOptions
      }
    },
    {
      name: 'Tablet iOS',
      use: {
        userAgent: devices['iPad (gen 11) landscape'].userAgent,
        viewport: devices['iPad (gen 11) landscape'].viewport,
        deviceScaleFactor: devices['iPad (gen 11) landscape'].deviceScaleFactor,
        hasTouch: devices['iPad (gen 11) landscape'].hasTouch
      }
    },
    {
      name: 'Mobile Android 320',
      use: {
        ...devices['Pixel 5'],
        ...chromiumLaunchOptions
      }
    },
    {
      name: 'Mobile iOS 320',
      use: {
        // The user agent and viewport are the most important parts for emulation
        userAgent: devices['iPhone 12'].userAgent,
        viewport: devices['iPhone 12'].viewport,
        deviceScaleFactor: devices['iPhone 12'].deviceScaleFactor,
        hasTouch: devices['iPhone 12'].hasTouch
        // isMobile is omitted to prevent the orientation error
      }
    },
    {
      name: 'Mobile Android 425',
      use: {
        ...chromiumLaunchOptions,
        viewport: { width: 425, height: 900 }
      }
    },
    {
      name: 'Mobile iOS 425',
      use: {
        userAgent: devices['iPhone 12 Pro'].userAgent,
        viewport: { width: 425, height: 900 },
        deviceScaleFactor: devices['iPhone 12 Pro'].deviceScaleFactor,
        hasTouch: devices['iPhone 12 Pro'].hasTouch
      }
    }
  ]
})
