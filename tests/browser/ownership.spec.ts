import { test, expect } from "@playwright/test";

test("About page identifies Kyle as the current owner/operator", async ({
  page,
}) => {
  await page.goto("/about/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "family business",
  );
  await expect(page.locator("main")).toContainText(/Kyle/);
  await expect(page.locator("main")).toContainText(/owner\/operator/i);
  await expect(page.locator("main")).not.toContainText(
    /Ben is the owner\/operator/i,
  );
});
