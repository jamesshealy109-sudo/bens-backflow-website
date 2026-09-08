import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { business, config } from "@/lib/config";
import { businessSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  applicationName: business.name,
  robots: { index: config.indexable, follow: config.indexable },
  verification: { google: config.verification },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header
          requestUrl={config.requestUrl}
          phone={business.phone}
          tel={business.tel}
        />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <JsonLd value={businessSchema()} />
        {config.gaId && <Analytics id={config.gaId} />}
      </body>
    </html>
  );
}
