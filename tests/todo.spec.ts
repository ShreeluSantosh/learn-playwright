import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('water the plants');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('feed the dog');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByText('feed the dog').click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.locator('li').filter({ hasText: 'feed the dog' }).getByLabel('Toggle Todo').check();
  await page.getByRole('link', { name: 'All' }).click();
  await page.locator('li').filter({ hasText: 'feed the dog' }).getByLabel('Toggle Todo').uncheck();
  await page.locator('li').filter({ hasText: 'water the plants' }).getByLabel('Toggle Todo').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByTestId('todo-title').click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByTestId('todo-title').click();
});