import type { NextConfig } from "next";
import { redirects } from "./src/lib/redirects.ts";

const pagesPreview = process.env.GITHUB_PAGES_PREVIEW === "true";
const previewBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "/bens-backflow-website";

const productionOnly: NextConfig = {
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          ...(process.env.SITE_INDEXABLE !== "true"
            ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
            : []),
        ],
      },
    ];
  },
};

const config: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  ...(pagesPreview
    ? {
        output: "export",
        basePath: previewBasePath,
        images: { unoptimized: true },
      }
    : productionOnly),
};

export default config;
