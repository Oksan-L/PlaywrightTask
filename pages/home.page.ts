import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly mainMenu: Locator;
  readonly homeLink: Locator;
  readonly sectionHeaders: string[];

  constructor(page: Page) {
    this.page = page;
    this.mainMenu = page.locator('#main-menu');
    this.homeLink = page.locator('#top-menu a', { hasText: 'Home' });
    this.sectionHeaders = [
      'Redmine',
      'Features',
      'Documentation',
      'Online demo',
      'Support & getting help',
      'Contributing and helping out',
      'Who uses Redmine?',
      'Redmine books'
    ];
  }

  async open() {
    await this.page.goto('https://www.redmine.org/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await expect(this.page).toHaveTitle(/Redmine/);
  }

  async getMainMenuLinks() {
    return this.mainMenu.locator('ul > li > a');
  }

  async getHeaderTexts() {
    // <h2>Title<a ...>¶</a></h2>
    const headers = this.page.locator('h2');
    return headers.allTextContents();
  }

  async clickHome() {
    await Promise.all([
      this.page.waitForNavigation({ url: 'https://www.redmine.org/' }),
      this.homeLink.click()
    ]);
  }
}
