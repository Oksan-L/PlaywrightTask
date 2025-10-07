// import { test, expect } from '@playwright/test';
// import { HomePage } from '../pages/home.page';

// test.describe('Redmine homepage tests', () => {
//   let homePage: HomePage;

//   test.beforeEach(async ({ page }) => {
//     homePage = new HomePage(page);
//     await homePage.open();
//   });

//   test('1. Homepage has the correct title', async ({ page }) => {
//     await expect(page).toHaveTitle(/Redmine/);
//   });

//   test('2. Main menu has 9 clickable links', async () => {
//     const links = await homePage.getMainMenuLinks();
//     await expect(links).toHaveCount(9);

//     for (const link of await links.all()) {
//       await expect(link).toBeVisible();
//       await expect(link).toHaveAttribute('href', /.+/);
//     }
//   });

//   test('3. Homepage contains all required section titles', async () => {
//     const headers = await homePage.getHeaderTexts();

//     for (const expected of homePage.sectionHeaders) {
//       const found = headers.some(h => h.includes(expected));
//       expect(found, `Expected header "${expected}" not found`).toBeTruthy();
//     }
//   });

//   test('4. Clicking "Activity" opens the correct page', async ({ page }) => {
//     const activityLink = homePage.mainMenu.locator('a', { hasText: 'Activity' });

//     await Promise.all([
//       page.waitForNavigation(),
//       activityLink.click(),
//     ]);

//     await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/activity');
//   });

//   test('5. Clicking "Home" returns to the homepage from a random menu item', async ({ page }) => {
//     const menuItems = [
//       'Overview',
//       'Download',
//       'Activity',
//       'Roadmap',
//       'Issues',
//       'News',
//       'Forums',
//       'Repository'
//     ];

//     const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
//     console.log(`🔹 Randomly selected menu item: ${randomItem}`);

//     const menuLink = homePage.mainMenu.locator('a', { hasText: randomItem });
//     await Promise.all([
//       page.waitForNavigation(),
//       menuLink.click()
//     ]);

//     await homePage.clickHome();
//     await expect(page).toHaveURL('https://www.redmine.org/');
//   });

// });
