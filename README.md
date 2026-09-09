# Ben’s Backflow Testing & Repair

Public marketing, education and lead-generation website for Ben’s Backflow, focused on Upstate South Carolina with statewide service availability. Built from the ground up with Next.js App Router, TypeScript and local optimized photography.

The Backflow Operations Platform remains separate. This website has no customer database, scheduling engine, payment handling or invented API.

## Preview

The current GitHub-hosted preview is deployed from `main` with GitHub Pages and updates automatically when `main` changes:

https://jamesshealy109-sudo.github.io/bens-backflow-website/

The preview is intentionally **noindex** and keeps production canonicals pointed at `https://bensbackflowsc.com/`. GitHub Pages is only the preview host; the eventual production site can still run as a normal Next.js Node deployment with real redirects and server headers.

## Development

Use Node.js 24 LTS (minimum 22.13) and npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

On PowerShell, use `Copy-Item .env.example .env.local`; `npm.cmd` is available where execution policy blocks `npm.ps1`.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm start
```

Build once before browser tests. Playwright starts the production server on port 3100. CI runs Chromium at desktop (1440), tablet (820) and mobile (390) widths, with accessibility and route/SEO checks. CI also verifies the GitHub Pages static-export variant.

## Deployment

Production can deploy to any supported Node hosting provider with `npm ci`, `npm run build`, then `npm start`. Set `PORT` if the provider requires it. Use a reverse proxy/TLS or the host’s managed HTTPS. The normal production build supports responsive image processing and **301 redirects**.

The GitHub Pages preview uses a separate static-export build mode with `/bens-backflow-website` as its base path. That preview mode does not replace the production deployment model.

## Configuration

| Variable                          | Default / behavior                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`            | `https://bensbackflowsc.com`; HTTPS origin only, used for canonicals and schema                        |
| `NEXT_PUBLIC_BASE_PATH`           | Blank for production; `/bens-backflow-website` for the GitHub Pages preview                            |
| `SITE_INDEXABLE`                  | `false`; set exactly `true` only for production. Controls robots metadata, robots.txt and X-Robots-Tag |
| `NEXT_PUBLIC_REQUEST_SERVICE_URL` | Blank → local request page with working call/email links; real public HTTPS URL → intake handoff       |
| `NEXT_PUBLIC_CUSTOMER_PORTAL_URL` | Blank → portal link omitted; real public HTTPS URL → footer/request-page link                          |
| `NEXT_PUBLIC_GA_ID`               | Blank → no analytics scripts or consent UI; accepts a `G-…` measurement ID                             |
| `GOOGLE_SITE_VERIFICATION`        | Optional Search Console HTML verification token                                                        |

These settings affect prerendered output: **rebuild after changing them**. Do not put secrets in `NEXT_PUBLIC_*`, commit local env files, or put credentials in URLs. Invalid configuration fails visibly rather than creating unsafe links.

## Platform handoff and conversions

When the actual StrataWorks Backflow Operations Platform URLs are known, configure them and rebuild. The public site never displays a success state for an unsubmitted form. The default request flow uses phone/email until a real intake URL is configured.

Consent-based GA4 can track `phone_click`, `request_service_click`, `email_click`, and `customer_portal_click` through `data-event` attributes. Query strings, destination URLs and form values are not sent as event parameters.

## Content maintenance

- `src/content/pages.ts`: typed service, area, resource and company content.
- `src/lib/config.ts`: shared business details and preview path configuration.
- `src/lib/seo.ts`: metadata, LocalBusiness and breadcrumb builders.
- `src/components`: shared navigation, footer, actions, content rendering, JSON-LD and optional analytics.
- `public/images`: real optimized WebP assets. See `docs/assets.md`.
- `src/lib/redirects.ts`: legacy route mappings used by the normal production build.

## Launch documents

- [Business fact audit](docs/business-audit.md)
- [Implementation plan](docs/implementation-plan.md)
- [SEO migration map](docs/seo-migration.md)
- [Asset provenance](docs/assets.md)
- [Launch checklist](docs/launch-checklist.md)

Kyle is the current owner/operator. Confirm Kyle’s current certification, hours and warranty before publishing any unverified claims, obtain real platform URLs if online intake is wanted, and review the updated privacy/terms before the production cutover.

See the [industrial redesign record](docs/industrial-redesign.md) for the current design and verification. The [original verification record](docs/verification.md) documents the initial build.

## Industrial visual system

The homepage composition lives in `src/components/IndustrialHome.tsx`, with shared tokens and responsive rules in `src/app/globals.css`. Headings use locally bundled Barlow Condensed (Fontsource/OFL); no runtime font CDN is needed. Home uses technical field imagery, an asymmetric dark hero, large service panels, a five-stage process, commercial coverage, Kyle's story and editorial resource rows. Numbers are section identifiers, never business statistics.

The single About content record is in `src/content/pages.ts`; the explicit About route renders that same record. Kyle is the current owner/operator. No founding year is verified or published.

After a Pages-mode build, run `npx playwright test --config=playwright.preview.config.ts` to verify the exported site under its repository prefix. To run the same read-only checks against the live preview, set `PREVIEW_URL=https://jamesshealy109-sudo.github.io/bens-backflow-website/`. The test server is local tooling only and is not a production backend.
