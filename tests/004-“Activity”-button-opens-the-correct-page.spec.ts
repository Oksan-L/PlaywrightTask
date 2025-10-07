import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Redmine homepage tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test('4. Clicking "Activity" opens the correct page', async ({ page }) => {
    const activityLink = homePage.mainMenu.locator('a', { hasText: 'Activity' });

    await Promise.all([
      page.waitForNavigation(),
      activityLink.click(),
    ]);

    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/activity');
  });

  });