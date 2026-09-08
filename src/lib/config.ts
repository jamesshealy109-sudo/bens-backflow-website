type Environment = Record<string, string | undefined>;

function httpsUrl(value: string | undefined, name: string) {
  if (!value?.trim()) return undefined;
  const url = new URL(value.trim());
  if (url.protocol !== "https:" || url.username || url.password)
    throw new Error(`${name} must be a public HTTPS URL without credentials`);
  return url.href;
}

export function createConfig(env: Environment) {
  const siteUrl =
    httpsUrl(env.NEXT_PUBLIC_SITE_URL, "NEXT_PUBLIC_SITE_URL") ??
    "https://bensbackflowsc.com/";
  if (
    new URL(siteUrl).pathname !== "/" ||
    new URL(siteUrl).search ||
    new URL(siteUrl).hash
  )
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an origin without a path, query or fragment",
    );
  const gaId = env.NEXT_PUBLIC_GA_ID?.trim() || undefined;
  if (gaId && !/^G-[A-Z0-9]+$/.test(gaId))
    throw new Error("NEXT_PUBLIC_GA_ID must be a GA4 measurement ID");
  return {
    siteUrl,
    requestUrl:
      httpsUrl(
        env.NEXT_PUBLIC_REQUEST_SERVICE_URL,
        "NEXT_PUBLIC_REQUEST_SERVICE_URL",
      ) ?? "/request-service/",
    portalUrl: httpsUrl(
      env.NEXT_PUBLIC_CUSTOMER_PORTAL_URL,
      "NEXT_PUBLIC_CUSTOMER_PORTAL_URL",
    ),
    indexable: env.SITE_INDEXABLE === "true",
    gaId,
    verification: env.GOOGLE_SITE_VERIFICATION?.trim() || undefined,
  };
}

export const config = createConfig({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_REQUEST_SERVICE_URL: process.env.NEXT_PUBLIC_REQUEST_SERVICE_URL,
  NEXT_PUBLIC_CUSTOMER_PORTAL_URL: process.env.NEXT_PUBLIC_CUSTOMER_PORTAL_URL,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  SITE_INDEXABLE: process.env.SITE_INDEXABLE,
  GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION,
});

export const business = {
  name: "Ben's Backflow Testing & Repair",
  legalName: "Ben's Backflow Testing & Repair LLC",
  phone: "(864) 238-5277",
  tel: "tel:+18642385277",
  email: "bensbackflow@gmail.com",
  cities: [
    "Greenville",
    "Spartanburg",
    "Anderson",
    "Simpsonville",
    "Greer",
    "Easley",
    "Greenwood",
    "Laurens",
    "Honea Path",
    "Fountain Inn",
    "Mauldin",
    "Taylors",
    "Powdersville",
    "Clemson",
  ],
};
