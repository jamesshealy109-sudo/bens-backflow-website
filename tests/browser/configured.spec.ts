import { test, expect } from "@playwright/test";

test("production indexing, real-link handoff and consent-based analytics", async ({
  page,
  request,
}) => {
  test.skip(
    process.env.TEST_CONFIGURED !== "true",
    "Run against the documented configured build",
  );
  const scriptRequests: string[] = [];
  await page.route("https://www.googletagmanager.com/**", async (route) => {
    scriptRequests.push(route.request().url());
    await route.fulfill({
      contentType: "application/javascript",
      body: "/* analytics network is mocked during tests */",
    });
  });
  await page.goto("/");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "index, follow",
  );
  expect((await request.get("/")).headers()["x-robots-tag"]).toBeUndefined();
  expect(await (await request.get("/robots.txt")).text()).toContain("Allow: /");
  await expect(
    page.locator('a[data-event="request_service_click"]').first(),
  ).toHaveAttribute("href", "https://portal.example.com/request");
  await expect(
    page.locator('a[data-event="customer_portal_click"]').first(),
  ).toHaveAttribute("href", "https://portal.example.com/");
  expect(scriptRequests.length).toBe(0);
  await page.getByRole("button", { name: "No thanks" }).click();
  await page.reload();
  expect(scriptRequests.length).toBe(0);
  await page.getByRole("button", { name: "Cookie settings" }).click();
  await page.getByRole("button", { name: "Allow analytics" }).click();
  await expect.poll(() => scriptRequests.length).toBe(1);
  await page
    .locator('a[data-event="phone_click"]')
    .first()
    .evaluate((node) =>
      node.addEventListener("click", (event) => event.preventDefault()),
    );
  await page.locator('a[data-event="phone_click"]').first().click();
  const commands = await page.evaluate(() =>
    (window.dataLayer ?? []).map((command) =>
      Array.from(command as ArrayLike<unknown>),
    ),
  );
  expect(
    commands.some(
      (command) => command[0] === "event" && command[1] === "phone_click",
    ),
  ).toBe(true);
  expect(JSON.stringify(commands)).not.toContain("238-5277");
  await page.getByRole("button", { name: "Cookie settings" }).click();
  await page.getByRole("button", { name: "Allow analytics" }).click();
  const latest = await page.evaluate(() =>
    (window.dataLayer ?? [])
      .map((command) => Array.from(command as ArrayLike<unknown>))
      .filter((command) => command[0] === "consent")
      .at(-1),
  );
  expect(latest?.[2]).toEqual({ analytics_storage: "granted" });
  await page.getByRole("button", { name: "Cookie settings" }).click();
  await page.getByRole("button", { name: "No thanks" }).click();
  expect(
    await page.evaluate(() => Reflect.get(window, "ga-disable-G-TEST1234")),
  ).toBe(true);
  await page.getByRole("button", { name: "Cookie settings" }).click();
  await page.getByRole("button", { name: "Allow analytics" }).click();
  expect(
    await page.evaluate(() => Reflect.get(window, "ga-disable-G-TEST1234")),
  ).toBe(false);
});
