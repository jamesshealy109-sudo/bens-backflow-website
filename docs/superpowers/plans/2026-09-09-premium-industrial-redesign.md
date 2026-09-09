# Premium industrial redesign implementation plan

## Approved direction

Replace the homepage composition and shared visual language with a premium industrial, work-focused system. Preserve Next.js, typed content, all 18 routes, SEO/schema, actual 301 production redirects, platform handoffs, analytics, and the existing GitHub Pages preview workflow. Production canonicals remain https://bensbackflowsc.com/. Preview stays noindex under /bens-backflow-website/.

## Audit

Synced main at 4b8cb70 before editing. The existing homepage uses a pale two-column vehicle hero, four equal cards, a three-step process, city box and FAQ sequence. Shared CSS uses rounded panels and broad blue blocks. Replace these compositions, not just their colors.

Reusable: src/lib/config.ts basePath helper, metadata/schema builders, ContentPage rendering, typed services/resources, accessible menu logic, call/request components, footer mark assets, tests, two build modes and workflows.

Ownership is duplicated: src/app/about/page.tsx has Kyle; src/content/pages.ts still describes Ben. Consolidate the route on shared content. The founding year appears in both About sources and home. Treat the old site's date as disputed, not verified authority. Remove from published content and correct audit/launch documents.

Existing photos: 450×600 assembly test is the strongest technical close-up; 397×529 vault image shows hands/gauges and field work; vehicle/trailer images can support the company story. Do not call unidentified people Kyle. Source resolution limits the imagery; use deliberate crops and limited display sizes, not fabricated replacements.

## Implementation sequence

1. Add regression checks for Kyle ownership, absence of unsupported historical claims, and the new work-first composition. Correct shared About content and documents; keep all metadata and routes. Commit the factual correction.
2. Rebuild src/app/page.tsx, Header, ContactBand and globals.css. Use near-black/steel/warm white, a restrained cyan accent, locally bundled condensed headings, angular buttons, technical rules and asymmetric photographs. Services become large split layouts; process a five-stage ledger; commercial a major dark/photo section; Kyle later; coverage large state typography; resources editorial rows. Apply the system to inner pages and footer. Commit the visual redesign.
3. Extend browser/static-export checks to cover basePath links/assets, noindex, production canonicals, CTAs and footer links at 390/820/1440 widths. Verify npm ci, lint, typecheck, unit tests, Node production build/browser tests and static preview export. Render and inspect desktop/tablet/mobile; fix overflow and contrast rather than relaxing assertions. Commit verification changes.
4. Push main, wait for CI and Pages deployment, and inspect the actual live preview at all three widths. Record findings and any real photography needs.

## Visual acceptance

The first viewport must look unmistakably different: technical work instead of the residential trailer hero, full dark composition, large condensed editorial headline, restrained rectangular CTA, no pale rounded card rhythm. Secondary pages and footer must belong to the same system. No invented statistics, certification claims, customer logos, founding year, warranty or portrait. Ordinal numbers label content only.
