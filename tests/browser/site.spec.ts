import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { allPages } from "../../src/content/pages";
import { redirects } from "../../src/lib/redirects";

test("home, navigation, conversion paths and accessible layout", async ({
  page,
}, info) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText(
    "Backflow testing.In good hands.",
  );
  await expect(
    page.getByRole("link", { name: /Call \(864\) 238-5277/ }).first(),
  ).toHaveAttribute("href", "tel:+18642385277");
  expect(await page.locator('script[src*="googletagmanager"]').count()).toBe(0);
  expect(await page.locator("iframe").count()).toBe(0);
  if (info.project.name === "mobile") {
    await page.getByRole("button", { name: /Menu/ }).click();
    await expect(
      page.getByRole("navigation", { name: "Main navigation" }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: /Menu/ })).toBeFocused();
    await page.getByRole("button", { name: /Menu/ }).click();
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Services", exact: true })
      .click();
    await expect(page).toHaveURL(/\/services\/$/);
    await page.goto("/");
  }
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  const a11y = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(a11y.violations).toEqual([]);
  await page.locator(".site-footer").scrollIntoViewIfNeeded();
  for (const img of await page.locator("img").all()) {
    await expect
      .poll(() =>
        img.evaluate(
          (node: HTMLImageElement) => node.complete && node.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({
    path: `test-results/home-${info.project.name}.png`,
    fullPage: true,
  });
  await page
    .locator("main")
    .getByRole("link", { name: /Request service/ })
    .first()
    .click();
  await expect(page).toHaveURL(/\/request-service\/$/);
  await expect(
    page
      .getByRole("link", { name: "bensbackflow@gmail.com", exact: true })
      .first(),
  ).toHaveAttribute("href", /mailto:bensbackflow@gmail.com/);
  expect(await page.locator("form").count()).toBe(0);
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  expect(errors).toEqual([]);
});

test("every public route has metadata, schema, one heading and no broken local links", async ({
  page,
  request,
}, info) => {
  const routes = [
    "/",
    ...allPages.map((p) => p.path),
    "/faq/",
    "/request-service/",
    "/privacy/",
    "/terms/",
  ];
  const destinations = new Set<string>();
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1"), route).toHaveCount(1);
    const title = await page.title();
    expect(titles.has(title), `duplicate title: ${route}`).toBe(false);
    titles.add(title);
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description?.length).toBeGreaterThan(70);
    expect(
      descriptions.has(description!),
      `duplicate description: ${route}`,
    ).toBe(false);
    descriptions.add(description!);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://bensbackflowsc.com${route}`,
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      `https://bensbackflowsc.com${route}`,
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    const schemas = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();
    const parsed = schemas.map((s) => JSON.parse(s));
    expect(parsed.some((s) => s["@type"] === "LocalBusiness")).toBe(true);
    if (route !== "/")
      expect(parsed.some((s) => s["@type"] === "BreadcrumbList")).toBe(true);
    if (allPages.find((p) => p.path === route)?.service)
      expect(parsed.some((s) => s["@type"] === "Service")).toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      route,
    ).toBe(true);
    expect(await page.locator("body").innerText()).not.toMatch(
      /lorem ipsum|Jobber|Kyle|123150626|BBB accredited/i,
    );
    const hrefs = await page
      .locator("a[href]")
      .evaluateAll((links) => links.map((a) => a.getAttribute("href")!));
    hrefs
      .filter((href) => href.startsWith("/"))
      .forEach((href) => destinations.add(href));
    if (info.project.name === "desktop") {
      expect(
        (
          await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
            .analyze()
        ).violations,
        route,
      ).toEqual([]);
    }
  }
  if (info.project.name === "desktop") {
    for (const href of destinations)
      expect((await request.get(href)).status(), href).toBe(200);
    const sitemap = await (await request.get("/sitemap.xml")).text();
    for (const route of routes)
      expect(sitemap).toContain(
        `<loc>https://bensbackflowsc.com${route}</loc>`,
      );
    expect((sitemap.match(/<loc>/g) ?? []).length).toBe(routes.length);
    expect(await (await request.get("/robots.txt")).text()).toContain(
      "Disallow: /",
    );
    expect((await request.get("/missing-page/")).status()).toBe(404);
    for (const redirect of redirects) {
      const response = await request.get(redirect.source, { maxRedirects: 0 });
      expect(response.status(), redirect.source).toBe(301);
      expect(response.headers().location).toBe(redirect.destination);
    }
  }
});
