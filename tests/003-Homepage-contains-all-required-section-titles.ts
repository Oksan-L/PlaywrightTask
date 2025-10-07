import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Redmine homepage tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test('3. Homepage contains all required section titles', async () => {
    const headers = await homePage.getHeaderTexts();

    for (const expected of homePage.sectionHeaders) {
      const found = headers.some(h => h.includes(expected));
      expect(found, `Expected header "${expected}" not found`).toBeTruthy();
    }
  });

  });