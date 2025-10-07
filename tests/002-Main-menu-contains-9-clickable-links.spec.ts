import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Redmine homepage tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

    test('2. Main menu has 9 clickable links', async () => {
        const links = await homePage.getMainMenuLinks();
        await expect(links).toHaveCount(9);

        for (const link of await links.all()) {
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', /.+/);
        }
    });

  });