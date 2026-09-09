import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/preview",
  timeout: 120000,
  workers: 3,
  reporter: "list",
  use: {
    baseURL:
      process.env.PREVIEW_URL ?? "http://127.0.0.1:3102/bens-backflow-website/",
    trace: "retain-on-failure",
  },
  webServer: process.env.PREVIEW_URL
    ? undefined
    : {
        command: "node scripts/serve-preview.mjs",
        url: "http://127.0.0.1:3102/bens-backflow-website/",
        timeout: 30000,
      },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 1000 } } },
    { name: "tablet", use: { viewport: { width: 820, height: 1180 } } },
    {
      name: "mobile",
      use: {
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
});
