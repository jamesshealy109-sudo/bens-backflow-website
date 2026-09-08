# Ben’s Backflow website implementation plan

Goal: a complete public marketing website in a new GitHub repository, prepared for deployment to bensbackflowsc.com. No GitHub Pages or Sites deployment.

## Design

Next.js App Router with TypeScript, prerendered public pages and a small client layer for navigation and optional analytics. A Node deployment supports true 301 legacy redirects without coupling to a hosting vendor. Content lives in typed modules, assets locally. No operational database or invented API.

Refine the current blue identity into deep indigo, warm white and restrained green. Use original company field photos, a large clear heading, practical service cards, an explanatory process and understated StrataWorks/F3 footer marks. Home is editorial and photo-led; service pages have specific scope and preparation guidance. All breakpoints have direct call/request actions.

## Execution

- [x] Record business facts, source URLs, uncertainty, old route inventory and media provenance.
- [x] Add tests for configuration validation, metadata/schema, legacy redirects, crawlability and request fallback.
- [x] Build shared navigation, footer, CTA, metadata and typed content modules.
- [x] Build home; four service pages and hub; Upstate, statewide and area hub; About; resource hub and three articles; FAQ; request-service; privacy and terms.
- [x] Add configuration-only platform handoff, consent-based optional GA4 and Search Console settings.
- [x] Optimize photos, implement 301 redirects, write maintenance and launch documentation.
- [x] Run lint, typecheck, tests, production build and browser checks at desktop/tablet/mobile. Audit links, sitemap, canonicals and JSON-LD. Push verified repository to GitHub.

## Boundaries

User confirms Ben is taking over from his dad. Do not transfer Kyle’s biography to Ben. Statewide work is user-confirmed; Upstate remains primary. No city doorway pages, invented reviews, unverified accreditation badges, fake employee photos or fake forms. Safe request fallback is phone/email, with online intake enabled only by a real HTTPS URL. Preview indexing is disabled by default; production requires explicit configuration.
