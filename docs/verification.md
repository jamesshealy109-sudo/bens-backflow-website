# Verification record

Verified locally on September 8, 2026 with Node 24.18.0 and the locked dependency tree.

- ESLint: pass.
- TypeScript: pass.
- Unit tests: 5 passing configuration/migration tests.
- Production build: pass. All 18 public content routes are prerendered, plus sitemap, robots and favicon.
- Browser suite: 6 passing scenarios across Chromium desktop 1440px, tablet 820px and mobile 390px. The three configured-test instances intentionally skip on the default build; the configured desktop test runs separately and passes.
- Full route audit: 18 pages return 200; unique titles/descriptions, exact canonical/OG URLs, one H1, LocalBusiness and breadcrumb schema, Service schema where applicable. No broken internal destinations. Unknown page returns 404.
- Migration: all 22 mapped legacy/alias requests return true 301 redirects to matching destinations.
- Accessibility: axe WCAG 2 A/AA and 2.1 AA scans report no violations on all desktop pages and home/request at the tablet/mobile breakpoints. Mobile menu open/close, Escape focus return and service navigation pass.
- Visual review: desktop/mobile home, tablet home, testing service and footer inspected. Fixed a mobile image aspect-ratio overflow. Footer logos and home images confirmed loaded. System fonts and all images remain local.
- Configured build: production robots and headers permit indexing; request/portal links use configured destinations. No analytics request before consent or after initial decline. Phone event contains no phone number. Consent re-enable works. Withdrawal sets Google's per-property disable flag; regression test failed before fix and passes afterward. Analytics script is mocked, so this verifies application behavior, not delivery to a real GA property.
- Dependency audit: zero known vulnerabilities at verification time.
- Independent code review: one substantive analytics-withdrawal finding, reproduced and fixed; no other substantive issues reported.
- Lighthouse mobile lab run on local production build: performance 98, accessibility 100, best practices 100; LCP 2.4 seconds, CLS 0, total blocking time 30 ms. Preview SEO score 69 reflects deliberate noindex, not a production indexing failure; the separate production configuration test verifies crawlability. These are local lab measurements, not field Core Web Vitals or hosting guarantees. An additional accessible-name suggestion for the brand link was corrected after the run.

Preview builds intentionally block indexing. The live production domain and a real operations-platform endpoint were not changed or exercised. No service inquiries were sent. Automated tests use Chromium; real-device Safari/Firefox and chosen-host performance remain launch checks. Unknown-route testing emits a Next.js internal NoFallbackError log while correctly returning the verified 404; there is no user-visible exception or failed route assertion.

Analytics implementation reference: [Google tag privacy controls](https://developers.google.com/tag-platform/security/guides/privacy).
