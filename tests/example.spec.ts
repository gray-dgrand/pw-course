import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  
  // Kiểm tra rằng Title contains text "Tài liệu học automation test"
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get started link', async ({ page }) => {
  // Truy cập trang: https://material.playwrightvn.com/
  await page.goto('https://material.playwrightvn.com/');
  
  // Click vào link chứa text: "Bài học 1: Register Page"
  await page.getByRole('link', { name: /Bài học 1: Register Page/ }).click();
  
  // Kiểm tra trang web có chứa thẻ heading với nội dung: "User Registration"
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
