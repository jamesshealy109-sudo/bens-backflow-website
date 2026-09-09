# Premium industrial redesign — September 9, 2026

## What changed

The homepage composition was replaced, not reskinned. It now opens with an immersive assembly-testing photo and large TEST / REPAIR / REPORT typography. The visual system uses near-black, charcoal, warm white, steel rules and a controlled cyan accent. Buttons and panels are angular. The new sequence is capability specifications, photographic service layouts, a five-stage technical process, commercial field capability, Kyle's second-generation story, large South Carolina coverage typography, editorial resource rows and a bold final request CTA.

Substantial files: `IndustrialHome.tsx` (new homepage composition), `page.tsx` (route wrapper), `globals.css` (replacement shared visual system), `Header.tsx`, `Actions.tsx`, `layout.tsx` (local heading font). Inner service, resource, contact, About and legal pages retain their content architecture and adopt the same typography, rules and restrained panel treatment. Existing StrataWorks and F3 marks remain secondary in the dark footer.

## Facts and assets

Kyle is the current owner/operator carrying forward his father's second-generation business. The shared content module had stale Ben ownership language while the explicit About route had Kyle; both now use one record. Removed all public “since 1999,” “EST. 1999,” and founding-year prose. An old site claim is not treated as authoritative verification in light of the user's reported conflict. No experience duration, credential, warranty, account size or client statistic was added.

Existing real field photographs are used. No person in those photos is labeled Kyle. Technical images are only 450×600 and 397×529 pixels; higher-resolution authentic assembly, gauge, commercial jobsite and truck photography would improve large displays. A verified Kyle portrait is optional later. No generated employees, fake jobs or client logos were introduced.

Barlow Condensed 600 is bundled locally through `@fontsource/barlow-condensed`, under its OFL license. Body text retains a restrained system sans-serif. No animation library, remote font request or new backend was added.

## Preserved architecture

All 18 public routes, content depth, production-domain canonicals, metadata, sitemap/robots, LocalBusiness/Service/Breadcrumb schema, production 301 map, phone/email fallback, configurable platform handoffs and analytics consent controls remain. The existing Pages workflow still exports with `/bens-backflow-website`, `.nojekyll` and noindex. Normal `npm run build` / `npm start` remain separate from static export.

## Verification

- `npm ci`, lint, TypeScript and Node production build passed.
- Seven unit tests passed, including a new shared ownership/history regression.
- Nine standard Chromium browser cases passed across desktop/tablet/mobile, including all-route SEO, local links, 301s, ownership and axe accessibility checks. The configured scenario is run separately as before.
- Pages static export passed; `.nojekyll` exists in `out`.
- Three static-preview browser cases passed at 1440, 820 and 390 widths. Every public route checked for repository-prefixed internal links and images, noindex, production canonical, working CTAs/footer links, loaded images and no horizontal overflow. Homepage axe WCAG 2/2.1 A/AA checks passed.
- Visually inspected rendered home at all three widths and testing/About/resources inner layouts. This is a different visual composition from the previous pale vehicle hero/card design. Initial gray ordinal contrast failures were corrected; assertions were not disabled.
- Independent read-only review reported no substantive findings.

The configured production build and its analytics/intake regression test also passed. This checks indexing, external-link handoff, consent and withdrawal using mocked analytics; no real customer inquiry was sent.

The deployment target is [the existing GitHub Pages preview](https://jamesshealy109-sudo.github.io/bens-backflow-website/). Deployment and live visual verification are reported with the completed task. Future maintainers can rerun the same preview suite against that URL using `PREVIEW_URL`.
