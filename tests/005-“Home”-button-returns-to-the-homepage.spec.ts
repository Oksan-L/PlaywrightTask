import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import menuData from '../data/menuItems.json';

test.describe('Redmine homepage tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test('5. Clicking "Home" returns to the homepage from a random menu item', async ({ page }) => {

    const randomItem = menuData.menuItems[Math.floor(Math.random() * menuData.menuItems.length)];
    console.log(`🔹 Randomly selected menu item: ${randomItem}`);

    const menuLink = homePage.mainMenu.locator('a', { hasText: randomItem });
    await Promise.all([
      page.waitForNavigation(),
      menuLink.click()
    ]);

    await homePage.clickHome();
    await expect(page).toHaveURL('https://www.redmine.org/');
  });

  });