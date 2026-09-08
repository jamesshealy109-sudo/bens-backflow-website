import type { MetadataRoute } from "next";
import { allPages } from "@/content/pages";
import { config } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    ...allPages.map((p) => p.path),
    "/request-service/",
    "/faq/",
    "/privacy/",
    "/terms/",
  ].map((path) => ({ url: new URL(path, config.siteUrl).href }));
}
