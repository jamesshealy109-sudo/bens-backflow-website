import type { Metadata } from "next";
import { business, config } from "./config";

export function metadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle =
    title.includes("Ben’s") || title.includes("Ben's")
      ? title
      : `${title} | Ben’s Backflow`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: business.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/images/trailer-residential.webp",
          width: 1200,
          height: 1005,
          alt: "Ben’s Backflow service truck and trailer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/trailer-residential.webp"],
    },
  };
}

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${config.siteUrl}#business`,
    name: business.legalName,
    url: config.siteUrl,
    telephone: "+1-864-238-5277",
    email: business.email,
    description:
      "Backflow testing, repair, replacement and existing irrigation system repair. Based in the Upstate and accepting jobs throughout South Carolina.",
    image: new URL("/images/trailer-residential.webp", config.siteUrl).href,
    areaServed: [
      { "@type": "State", name: "South Carolina" },
      { "@type": "Place", name: "Upstate South Carolina" },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, config.siteUrl).href,
    })),
  };
}
