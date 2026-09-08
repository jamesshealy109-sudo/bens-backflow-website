# SEO migration map

Audited September 8, 2026 against the current live sitemap and linked HTML pages. All twelve city pages were fetched. Rankings and backlinks need Search Console verification before cutover.

| Old URL path                        | New URL path                           | Redirect needed |
| ----------------------------------- | -------------------------------------- | --------------- |
| /                                   | /                                      | No              |
| /index.html                         | /                                      | Yes, 301        |
| /about.html                         | /about/                                | Yes, 301        |
| /backflow-testing.html              | /services/backflow-testing/            | Yes, 301        |
| /backflow-repair.html               | /services/backflow-repair/             | Yes, 301        |
| /irrigation-repair.html             | /services/irrigation-repair/           | Yes, 301        |
| /service-areas.html                 | /service-areas/                        | Yes, 301        |
| /contact.html                       | /request-service/                      | Yes, 301        |
| /contact/                           | /request-service/                      | Yes, 301        |
| /privacy.html                       | /privacy/                              | Yes, 301        |
| /terms.html                         | /terms/                                | Yes, 301        |
| /backflow-testing-anderson.html     | /service-areas/upstate-south-carolina/ | Yes, 301        |
| /backflow-testing-clemson.html      | /service-areas/upstate-south-carolina/ | Yes, 301        |
| /backflow-testing-easley.html       | /service-areas/upstate-south-carolina/ | Yes, 301        |
| /backflow-testing-fountain-inn.html | /service-areas/upstate-south-carolina/ | Yes, 301        |
| /backflow-testing-greenville.html   | /service-areas/upstate-south-carolina/ | Yes, 301        |
| /backflow-testing-greenwood.html    | /service-areas/upstate-south-carolina/ | Yes, 301        |
| /backflow-testing-greer.html        | /service-areas/upstate-south-carolina/ | Yes, 301        |
| /backflow-testing-mauldin.html      | /service-areas/upstate-south-carolina/ | Yes, 301        |
| /backflow-testing-powdersville.html | /service-areas/upstate-south-carolina/ | Yes, 301        |
| /backflow-testing-simpsonville.html | /service-areas/upstate-south-carolina/ | Yes, 301        |
| /backflow-testing-spartanburg.html  | /service-areas/upstate-south-carolina/ | Yes, 301        |
| /backflow-testing-taylors.html      | /service-areas/upstate-south-carolina/ | Yes, 301        |

All city paths consolidate into a substantive Upstate page with actual community coverage and utility/access guidance. Core service pages map to their corresponding replacements. Privacy and terms retain their purpose. Unknown paths return 404; there is no blanket homepage redirect.

The contact alias and index.html mappings are defensive additions beyond the sitemap. Existing #request homepage bookmarks still need a stable request anchor; the homepage contact band uses that ID. URL fragments are not sent to the server. Existing city fragments on service-areas.html are supported on the new areas hub.

Next.js returns true 301 responses via next.config.ts; bare-to-trailing-slash normalization may use the framework’s 308. Re-crawl before launch, review Search Console, retain redirects long term, and check the chosen Node host preserves them.
