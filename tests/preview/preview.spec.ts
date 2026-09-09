import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { allPages } from "../../src/content/pages";

const prefix = "/bens-backflow-website";
test("static preview preserves nested navigation, assets, metadata and responsive accessibility", async ({
  page,
}, info) => {
  const routes = [
    "/",
    ...allPages.map((p) => p.path),
    "/faq/",
    "/request-service/",
    "/privacy/",
    "/terms/",
  ];
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const route of routes) {
    const response = await page.goto(`.${route}`);
    expect(response?.status(), route).toBe(200);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://bensbackflowsc.com${route}`,
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      route,
    ).toBe(true);
    expect(await page.locator("main").innerText()).not.toMatch(
      /1999|Ben is (the owner|taking)/i,
    );
    const hrefs = await page
      .locator("a[href]")
      .evaluateAll((nodes) => nodes.map((node) => node.getAttribute("href")!));
    for (const href of hrefs.filter((href) => href.startsWith("/"))) {
      expect(href, `${route} -> ${href}`).toMatch(/^\/bens-backflow-website\//);
      const target = href.slice(prefix.length).split("#")[0];
      expect(routes, `unknown target: ${href}`).toContain(target);
    }
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(
          () =>
            img.evaluate(
              (node: HTMLImageElement) =>
                node.complete && node.naturalWidth > 0,
            ),
          { timeout: 15000 },
        )
        .toBe(true);
      await expect(img).toHaveAttribute("src", /^\/bens-backflow-website\//);
    }
    await expect(
      page.locator('a[data-event="request_service_click"]').first(),
    ).toHaveAttribute("href", `${prefix}/request-service/`);
    await expect(
      page.locator('a[data-event="phone_click"]').first(),
    ).toHaveAttribute("href", "tel:+18642385277");
    await expect(page.locator(".strata-credit")).toHaveAttribute(
      "href",
      "https://strataworks.tech",
    );
    await expect(page.locator(".f3-mark")).toHaveAttribute(
      "href",
      "https://f3midlands.com/",
    );
    if (route === "/") {
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      await expect(page.locator(".industrial-hero h1")).toHaveText(
        "Test.Repair.Report.",
      );
      await expect(page.locator(".industrial-hero")).not.toContainText("Kyle");
      await expect(page.locator(".continuity-section")).toContainText("Kyle");
      const heroBox = await page.locator(".industrial-hero").boundingBox();
      expect(heroBox!.width).toBeLessThanOrEqual(
        info.project.use.viewport!.width,
      );
      expect(
        (
          await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
            .analyze()
        ).violations,
      ).toEqual([]);
      await page.screenshot({
        path: `test-results/preview-${info.project.name}-hero.png`,
      });
      await page.screenshot({
        path: `test-results/preview-${info.project.name}-full.png`,
        fullPage: true,
      });
      if (info.project.name !== "desktop") {
        await page.getByRole("button", { name: /Menu/ }).click();
        await expect(
          page.getByRole("navigation", { name: "Main navigation" }),
        ).toBeVisible();
        await page.keyboard.press("Escape");
        await expect(page.getByRole("button", { name: /Menu/ })).toBeFocused();
        await page.getByRole("button", { name: /Menu/ }).click();
      }
      await page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link", { name: "Commercial", exact: true })
        .click();
      await expect(page).toHaveURL(
        new RegExp(`${prefix}/services/commercial-backflow/$`),
      );
    }
  }
  expect(errors).toEqual([]);
});
