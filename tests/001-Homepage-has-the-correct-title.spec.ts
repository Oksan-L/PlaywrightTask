import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Redmine homepage tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test('1. Homepage has the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Redmine/);
  });

  });