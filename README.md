# Ben’s Backflow Testing & Repair

Public marketing, education and lead-generation website for Ben’s Backflow, focused on Upstate South Carolina with statewide service availability. Built from the ground up with Next.js App Router, TypeScript and local optimized photography.

The Backflow Operations Platform remains separate. This website has no customer database, scheduling engine, payment handling or invented API. GitHub stores the source and runs CI; **GitHub Pages is not configured**. No Sites deployment is configured.

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

Build once before browser tests. Playwright starts the production server on port 3100. CI runs Chromium at desktop (1440), tablet (820) and mobile (390) widths, with accessibility and route/SEO checks. `npm run typecheck` also works after a build, including generated route types.

## Deployment

Deploy to any supported Node hosting provider with `npm ci`, `npm run build`, then `npm start`. Set `PORT` if the provider requires it. Use a reverse proxy/TLS or the host’s managed HTTPS. Keep `.next`, `public`, production dependencies and package metadata available. This normal Next Node deployment supports responsive image processing and **301 redirects**; do not upload the files to a static-only host and expect those features to work.

There is deliberately no automatic deploy workflow and no change to the live domain. When ready, connect `bensbackflowsc.com`, choose production settings below, rebuild and run the launch checks in `docs/launch-checklist.md`.

## Configuration

| Variable                          | Default / behavior                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`            | `https://bensbackflowsc.com`; HTTPS origin only, used for canonicals and schema                        |
| `SITE_INDEXABLE`                  | `false`; set exactly `true` only for production. Controls robots metadata, robots.txt and X-Robots-Tag |
| `NEXT_PUBLIC_REQUEST_SERVICE_URL` | Blank → `/request-service/` with working call/email links; real public HTTPS URL → intake handoff      |
| `NEXT_PUBLIC_CUSTOMER_PORTAL_URL` | Blank → portal link omitted; real public HTTPS URL → footer/request-page link                          |
| `NEXT_PUBLIC_GA_ID`               | Blank → no analytics scripts or consent UI; accepts a `G-…` measurement ID                             |
| `GOOGLE_SITE_VERIFICATION`        | Optional Search Console HTML verification token                                                        |

These settings affect prerendered output: **rebuild after changing them**. Do not put secrets in `NEXT_PUBLIC_*`, commit local env files, or put credentials in URLs. Invalid configuration fails visibly rather than creating unsafe links. Preserve production-domain canonicals on previews, with noindex enabled. For a private preview, add hosting-level authentication; noindex is not access control.

## Platform handoff and conversions

When the actual StrataWorks URLs are known, configure them and rebuild. Test request and portal destinations on a preview before launch. The public site never displays a success state for an unsubmitted form. The default request flow opens a phone dialer or email composer and explains that appointments need confirmation.

Consent-based GA4 can track `phone_click`, `request_service_click`, `email_click`, and `customer_portal_click` through `data-event` attributes. Query strings, destination URLs and form values are not sent as event parameters. Full-document navigation is intentional and avoids route prefetching; default GA pageviews see sanitized pathname-only URLs. Visitors can decline or change analytics preferences.

There is **no form submission event** emitted for a click. When a real intake integration exists, implement `generate_lead` only after a confirmed submission, with a backend receipt/deduplication strategy. A separate portal must implement its own consent, successful-submission measurement and any cross-domain configuration. Do not infer success across origins. A future embedded/API form requires real interface documentation, server-side validation, rate limiting, spam controls, clear errors and an accurate privacy update.

## Content maintenance

- `src/content/pages.ts`: typed service, area, resource and company content. Add an entry with a unique permanent path, title, description, heading and sections. `generateStaticParams` and sitemap pick it up automatically.
- Services: add to `services`, set `service: true`, include real scope and update home card copy if adding a fifth service.
- Areas: add to `otherPages` only with verified coverage and substantive unique guidance. Prefer improving the Upstate page to publishing thin city pages. No invented offices.
- Resources: add to `resources`, set `article: true`, link primary sources for provider/regulatory claims and update the editorial review date in the component when content is actually reviewed. Avoid generic statewide legal claims.
- `src/lib/config.ts`: shared business details. Update them once for consistent contact links.
- `src/lib/seo.ts`: metadata, LocalBusiness and breadcrumb builders. Service schema is generated per service page. FAQ content is visible HTML, with no FAQ rich-result claim; no unverified ratings/address/credentials are emitted.
- `src/components`: shared navigation, footer, actions, content rendering, JSON-LD and optional analytics.
- `public/images`: real optimized WebP assets. See `docs/assets.md`. Provide accurate alt text, stable dimensions/aspect ratios and responsive sizes. Do not enlarge small source photos or invent project photos.
- `src/lib/redirects.ts`: legacy route mappings used by `next.config.ts`. Test every change.

Native details/summary powers FAQ interaction. Mobile navigation uses a real button, expanded state, Escape support and a non-modal dropdown. System fonts avoid external font requests. CSS respects reduced motion. No review iframe or intake widget is loaded.

## Launch documents

- [Business fact audit](docs/business-audit.md)
- [Implementation plan](docs/implementation-plan.md)
- [SEO migration map](docs/seo-migration.md)
- [Asset provenance](docs/assets.md)
- [Launch checklist](docs/launch-checklist.md)

Current unknowns are documented, not silently published as business promises. In particular, confirm Ben’s current certification, hours and warranty, obtain real platform URLs if online intake is wanted, and review the updated privacy/terms before the production cutover.

See [verification record](docs/verification.md) for completed checks and test limits.
