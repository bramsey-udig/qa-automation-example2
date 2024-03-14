import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test("look for fancy string", async ({ page }) => {
  // This will navigate to http://127.0.0.1:3000/
  await page.goto("./");
  const locator = page.getByRole("link", { name: "Fancy String" });
  await expect(locator).toContainText("Fancy String");
});

test("dont have other string", async ({ page }) => {
  // This will navigate to http://127.0.0.1:3000/
  await page.goto("./");
  const locator = page.getByRole("link", { name: "Fancy String" });
  await expect(locator).not.toContainText("asdasdasdasd");
});
