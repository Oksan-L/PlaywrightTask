# Playwright Redmine Tests with Allure Report

## Summary
This project automates testing of the Redmine website using Playwright with Page Object Model and Allure Report integration.

## Report
https://oksan-l.github.io/PlaywrightTask/


## Installation

https://playwright.dev/docs/intro

```bash
npm init playwright@latest
```

## Running

```bash
npx playwright test
```
* Open testing UI: ```--ui```
* Run a single project/browser: ```--project=chromium```

## Generate Allure Report
```
npm run allure:generate
npm run allure:open
```