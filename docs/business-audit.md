# Business and content audit

Audit date: September 8, 2026. Sources were fetched directly over HTTPS. The web-search index returned no results for the domain; sitemap presence is not proof of indexing or rankings. Search Console access is still needed to quantify search equity.

## Source-supported facts used

| Fact                                                                                                    | Source                                                                                                                   | Treatment                                       |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| Ben’s Backflow Testing & Repair LLC                                                                     | [Current home](https://bensbackflowsc.com/) and footer                                                                   | Business/schema identity                        |
| (864) 238-5277; bensbackflow@gmail.com                                                                  | [Contact](https://bensbackflowsc.com/contact.html)                                                                       | All contact CTAs                                |
| Ben is owner/operator taking over from his dad                                                          | User confirmation in this task, September 8                                                                              | About copy; supersedes Kyle references          |
| Family company serving the Upstate since 1999                                                           | [About](https://bensbackflowsc.com/about.html)                                                                           | Company history only; not Ben’s personal tenure |
| Commercial, residential and irrigation backflow testing; passing reports submitted to water provider    | [Testing](https://bensbackflowsc.com/backflow-testing.html)                                                              | Service scope and process                       |
| Assembly repair, replacement and retesting                                                              | [Repair](https://bensbackflowsc.com/backflow-repair.html)                                                                | Service scope, no same-day guarantee            |
| Existing irrigation diagnostics/repair; not new installations or interior plumbing                      | [Irrigation](https://bensbackflowsc.com/irrigation-repair.html), [existing terms](https://bensbackflowsc.com/terms.html) | Preserve scope                                  |
| Greenville, Spartanburg, Anderson and surrounding Upstate communities, including Laurens and Honea Path | [Areas](https://bensbackflowsc.com/service-areas.html)                                                                   | One substantive Upstate page                    |
| Statewide South Carolina availability                                                                   | User’s supplied brief                                                                                                    | Supersedes old approximate 60-mile language     |

## Claims recorded but held out of new promotional copy

- Old About names Kyle McKittrick as owner. User corrected current ownership to Ben taking over from his father. No surname, personal experience total, portrait attribution or transferred biography invented.
- Old site advertises SC DHEC cross-connection number 123150626, ABPA membership and BBB accreditation. Current credential holder, validity and accreditation transfer were not independently verified. No badge, credential number, certification assertion or rating published. Confirm current tester credentials before launch.
- Old site claims 24/7 emergency service, weekday 8–5 hours, one-year parts/labor warranty, never-subcontracted work, same-visit repairs, “most combined experience,” and half of clients retained ten years. These need confirmation under the new operator; omitted rather than converted into promises.
- Old footer identifies Fountain Inn; user’s brief confirms only Upstate base. No street address, storefront, invented map pin or city office appears in schema. Confirm preferred public locality before adding it.
- Trailer photo has a second historical phone number, 864-862-6585. Retain as original photography, but use only the current website’s primary contact in all links and copy. Confirm whether the secondary number should remain visible in future imagery.
- The old review section embeds a ReputationHub widget. No readable, attributable review text or live rating was verified, so no testimonial, review count, aggregateRating or review widget was copied.
- No legitimate business social profile URLs were discovered in the fetched first-party pages. StrataWorks and F3 links are user-requested footer links, not business social accounts or endorsements.

## Legacy site and migration findings

The old site is a set of HTML documents, shared CSS, Google-hosted fonts, a third-party reviews widget and a Kinplex intake iframe. The replacement removes the old intake dependency and uses configurable StrataWorks handoffs. `robots.txt` allows crawling and the sitemap lists 21 URLs: home, eight main HTML pages and twelve city pages. All listed pages were fetched. See the complete mapping in `seo-migration.md` and executable redirects in `src/lib/redirects.ts`.

City pages repeat the same service/site structure with location headings. Consolidation is intentional; the Upstate page retains the city coverage and offers useful provider, access and portfolio guidance. Existing search performance must be checked before the eventual domain cutover.

## Technical/educational research

- [Greenville Water backflow prevention](https://www.greenvillewater.com/engineering/backflow-prevention): provider-specific testing and report resources; do not generalize to every SC residence.
- [Greenville Water cross-connection manual](https://www.greenvillewater.com/documents/Cross-Connection-Manual-20250606.pdf), section 7: failed tests and retesting. New copy links to source and avoids repeating deadlines or penalties.
- [Next.js installation](https://nextjs.org/docs/app/getting-started/installation): App Router setup. Registry resolved stable Next 16.3.4 / React 19.2.8 during implementation. Node 24 used for verification.

Search intent groups: due notice/testing → testing page; failed/leaking assembly → repair page and failure guide; several properties/reporting → commercial page; location availability → Upstate and statewide pages; preparation/questions → guides and FAQ. No ranking or volume claims are made.
