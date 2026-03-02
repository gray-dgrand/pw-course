import { test, expect } from '@playwright/test';

// Module: AUTH - Authentication
// Site under test: https://pw-practice-dev.playwrightvn.com/wp-admin

const ADMIN_LOGIN_URL = 'https://pw-practice-dev.playwrightvn.com/wp-admin';

test.describe('AUTH - Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ADMIN_LOGIN_URL);
  });

  test('@AUTH_D01: Login fail', async ({ page }) => {
    // Preconditions (the sheet usually says "Đi tới trang login")
    // Step: Nhập sai username/password và click login
    await page.getByLabel('Username or Email Address').fill('wrong_user');
    await page.getByLabel('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Log In' }).click();

    // Expected: hiện thông báo lỗi username/password không đúng
    await expect(page.getByRole('alert')).toContainText(
      /incorrect username or password/i,
    );
  });

  test('@AUTH_D02: Login success', async ({ page }) => {
    // NOTE: Thay các giá trị dưới đây thành tài khoản thật mà mentor đã cấp cho bạn.
    const validUsername = process.env.PW_AUTH_USERNAME ?? 'admin';
    const validPassword = process.env.PW_AUTH_PASSWORD ?? 'admin_password';

    await page.getByLabel('Username or Email Address').fill(validUsername);
    await page.getByLabel('Password').fill(validPassword);
    await page.getByRole('button', { name: 'Log In' }).click();

    // Expected: chuyển sang dashboard / trang quản trị
    await expect(page).toHaveURL(/\/wp-admin\/?/);
    await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
  });
});

