# Production launch checklist

## Business review

- [ ] Confirm current contact number and email with Ben.
- [ ] Confirm current tester credentials before accepting production testing requests; add a precise credential claim only with evidence. Old certificate details are not assumed to transfer.
- [ ] Review About wording: Kyle is the current owner/operator carrying forward his father's second-generation family business. No founding year is verified or published.
- [ ] Confirm any desired hours, warranty, emergency availability or specific credentials before publishing those claims.
- [ ] Review photo rights and historical lettering/secondary phone on the service trailer. A verified Kyle portrait is optional for About; higher-resolution field/equipment photography is the priority. Do not identify the technician in old photos without confirmation.
- [ ] Review the privacy and website terms against actual business/hosting/platform practices. No new warranty or SMS enrollment is created by this site.

## Integration and deployment

- [ ] Select eventual production Node hosting. The existing GitHub Pages deployment is a noindex visual preview only; preserve that workflow until production hosting is chosen.
- [ ] Test phone/email flows. If online requests are desired, supply and verify the real StrataWorks request URL and optional portal URL, then rebuild.
- [ ] Configure GA4/Search Console only when ready; verify consent behavior and cross-domain conversion ownership. Do not count a portal click as a submitted lead.
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://bensbackflowsc.com` and `SITE_INDEXABLE=true` for the actual production build.
- [ ] Protect preview with host authentication if needed and keep preview noindex. Verify rendered meta robots and X-Robots-Tag on both environments.
- [ ] Run `npm ci`, lint, typecheck, unit tests, build and browser tests. The browser suite defaults to preview/noindex expectations; test launch-specific indexability separately.
- [ ] Verify HTTPS, image delivery, caching and successful requests on the chosen host.

## Migration and measurement

- [ ] Export current Search Console pages/queries/links and analytics landing pages before replacing the old site. Sitemap entries alone are not proof of ranking.
- [ ] Re-crawl the live site before cutover; extend mappings if old URLs/assets changed since September 8.
- [ ] Verify each legacy redirect returns one 301 to the closest page, then a 200; no redirect loops.
- [ ] Confirm host www/non-www and HTTP/HTTPS normalization. Preserve relevant old media URLs if search/link data shows demand; map photos individually rather than redirecting every missing asset home.
- [ ] Check new sitemap, canonical origin, robots allow rule, Search Console verification and all schema.
- [ ] Check desktop/tablet/mobile on the production host, plus Safari/Firefox and real phone call/email behavior. Automated local browser testing uses Chromium.
- [ ] Submit sitemap in Search Console and monitor crawl errors, indexed pages, calls and leads after launch.
- [ ] Compare old/new search performance over time; do not promise ranking improvements.
- [ ] Keep the previous deployment available for rollback. DNS/domain replacement is a separate launch action.

No customer data collection form is missing silently: the delivered phone/email request page is the live fallback until real platform handoff URLs are configured.
