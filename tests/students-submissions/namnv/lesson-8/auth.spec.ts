import { test, expect } from '@playwright/test';

const ADMIN_LOGIN_URL = 'https://pw-practice-dev.playwrightvn.com/wp-admin';

test.describe('AUTH - Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ADMIN_LOGIN_URL);
  });

  test('@AUTH_D01: Login fail', async ({ page }) => {
    await page.getByLabel('Username or Email Address').fill('wrong_user');
    await page.getByLabel('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Log In' }).click();

    await expect(page.getByRole('alert')).toContainText(
      /incorrect username or password/i,
    );
  });

  test('@AUTH_D02: Login success', async ({ page }) => {
    const validUsername = process.env.PW_AUTH_USERNAME ?? 'admin';
    const validPassword = process.env.PW_AUTH_PASSWORD ?? 'admin_password';

    await page.getByLabel('Username or Email Address').fill(validUsername);
    await page.getByLabel('Password').fill(validPassword);
    await page.getByRole('button', { name: 'Log In' }).click();

    await expect(page).toHaveURL(/\/wp-admin\/?/);
    await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
  });
});

