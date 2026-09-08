const routes: Record<string, string> = {
  "/index.html": "/",
  "/about.html": "/about/",
  "/backflow-testing.html": "/services/backflow-testing/",
  "/backflow-repair.html": "/services/backflow-repair/",
  "/irrigation-repair.html": "/services/irrigation-repair/",
  "/service-areas.html": "/service-areas/",
  "/contact.html": "/request-service/",
  "/contact/": "/request-service/",
  "/privacy.html": "/privacy/",
  "/terms.html": "/terms/",
};
for (const city of [
  "anderson",
  "clemson",
  "easley",
  "fountain-inn",
  "greenville",
  "greenwood",
  "greer",
  "mauldin",
  "powdersville",
  "simpsonville",
  "spartanburg",
  "taylors",
]) {
  routes[`/backflow-testing-${city}.html`] =
    "/service-areas/upstate-south-carolina/";
}
export const redirects = Object.entries(routes).map(
  ([source, destination]) => ({
    source,
    destination,
    statusCode: 301 as const,
  }),
);
