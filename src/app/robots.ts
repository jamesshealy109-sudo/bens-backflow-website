import type { MetadataRoute } from "next";
import { config } from "@/lib/config";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(config.indexable ? { allow: "/" } : { disallow: "/" }),
    },
    sitemap: new URL("/sitemap.xml", config.siteUrl).href,
  };
}
