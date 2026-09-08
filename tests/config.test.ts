import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createConfig } from "../src/lib/config.ts";
import { redirects } from "../src/lib/redirects.ts";

describe("deployment and intake boundaries", () => {
  it("provides a usable local request destination with no backend", () => {
    const config = createConfig({});
    assert.equal(config.requestUrl, "/request-service/");
    assert.equal(config.portalUrl, undefined);
    assert.equal(config.indexable, false);
    assert.equal(config.basePath, "");
  });
  it("accepts explicit HTTPS integration URLs", () => {
    const config = createConfig({
      NEXT_PUBLIC_REQUEST_SERVICE_URL: "https://portal.example.com/request",
      NEXT_PUBLIC_CUSTOMER_PORTAL_URL: "https://portal.example.com/",
    });
    assert.equal(config.requestUrl, "https://portal.example.com/request");
    assert.equal(config.portalUrl, "https://portal.example.com/");
  });
  it("supports a GitHub Pages repository base path without changing canonicals", () => {
    const config = createConfig({
      NEXT_PUBLIC_BASE_PATH: "/bens-backflow-website",
      NEXT_PUBLIC_SITE_URL: "https://bensbackflowsc.com",
    });
    assert.equal(config.basePath, "/bens-backflow-website");
    assert.equal(
      config.requestUrl,
      "/bens-backflow-website/request-service/",
    );
    assert.equal(config.siteUrl, "https://bensbackflowsc.com/");
  });
  it("rejects unsafe and incomplete configuration instead of shipping broken CTAs", () => {
    for (const value of [
      "javascript:alert(1)",
      "http://example.com",
      "/unknown",
      "https://user:pass@example.com",
    ]) {
      assert.throws(() =>
        createConfig({ NEXT_PUBLIC_REQUEST_SERVICE_URL: value }),
      );
    }
    assert.throws(() => createConfig({ NEXT_PUBLIC_GA_ID: "bad-id" }));
  });
  it("only allows indexing with explicit production configuration", () => {
    assert.equal(createConfig({ SITE_INDEXABLE: "true" }).indexable, true);
    assert.throws(() =>
      createConfig({
        NEXT_PUBLIC_SITE_URL: "https://example.com/subdirectory",
      }),
    );
  });
});

describe("migration", () => {
  it("preserves service intent and consolidates all twelve old city pages", () => {
    assert.equal(
      redirects.find((r) => r.source === "/backflow-repair.html")?.destination,
      "/services/backflow-repair/",
    );
    const cities = redirects.filter((r) =>
      r.source.startsWith("/backflow-testing-"),
    );
    assert.equal(cities.length, 12);
    assert.ok(
      cities.every(
        (r) =>
          r.destination === "/service-areas/upstate-south-carolina/" &&
          r.statusCode === 301,
      ),
    );
    assert.equal(
      new Set(redirects.map((r) => r.source)).size,
      redirects.length,
    );
  });
});
