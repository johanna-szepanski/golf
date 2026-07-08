import { defineConfig } from "@playwright/test";

const port = 4173;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",
  use: {
    trace: "on-first-retry"
  },
  webServer: process.env.PLAYWRIGHT_WEB_SERVER
    ? {
        command: `yarn dev --host 127.0.0.1 --port ${port}`,
        url: `http://127.0.0.1:${port}`,
        reuseExistingServer: !process.env.CI
      }
    : undefined,
  projects: [
    {
      name: "unit",
      testMatch: /unit\/.*\.spec\.ts/
    },
    {
      name: "integration",
      testMatch: /integration\/.*\.spec\.ts/,
      use: {
        baseURL: `http://127.0.0.1:${port}`
      }
    }
  ]
});
