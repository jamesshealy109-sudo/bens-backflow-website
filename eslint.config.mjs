import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Full document navigation is intentional: no route prefetching, predictable
  // focus and consent-based page views without a second client-side router layer.
  { rules: { "@next/next/no-html-link-for-pages": "off" } },
  globalIgnores([
    ".next/**",
    "next-env.d.ts",
    "playwright-report/**",
    "test-results/**",
  ]),
]);
