import { test, expect } from '@playwright/test';

const ADMIN_LOGIN_URL = 'https://pw-practice-dev.playwrightvn.com/wp-admin';

const ADMIN_USERNAME = process.env.PW_AUTH_USERNAME ?? 'admin';
const ADMIN_PASSWORD = process.env.PW_AUTH_PASSWORD ?? 'admin_password';

async function loginAsAdmin(page: import('@playwright/test').Page) {
  await page.goto(ADMIN_LOGIN_URL);
  await page.getByLabel('Username or Email Address').fill(ADMIN_USERNAME);
  await page.getByLabel('Password').fill(ADMIN_PASSWORD);
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page).toHaveURL(/\/wp-admin\/?/);
}

test.describe('ACC - Account', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('@ACC_D01: Create account with editor permission', async ({ page }) => {
    await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/user-new.php');

    const username = `editor_${Date.now()}`;
    const email = `${username}@example.com`;

    await page.getByLabel('Username', { exact: true }).fill(username);
    await page.getByLabel('Email').fill(email);
    await page.getByLabel('First Name').fill('Editor');
    await page.getByLabel('Last Name').fill('User');

    await page.getByLabel('Role').selectOption('editor');

    const sendEmailCheckbox = page.getByLabel(
      /Send the new user an email about their account/i,
    );
    if (await sendEmailCheckbox.isVisible()) {
      await sendEmailCheckbox.uncheck();
    }

    await page.getByRole('button', { name: 'Add New User' }).click();

    await expect(page.getByRole('alert')).toContainText(/New user created/i);
  });

  test('@ACC_D02: Create account with subscriber permission', async ({ page }) => {
    await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/user-new.php');

    const username = `subscriber_${Date.now()}`;
    const email = `${username}@example.com`;

    await page.getByLabel('Username', { exact: true }).fill(username);
    await page.getByLabel('Email').fill(email);
    await page.getByLabel('First Name').fill('Subscriber');
    await page.getByLabel('Last Name').fill('User');

    await page.getByLabel('Role').selectOption('subscriber');

    const sendEmailCheckbox = page.getByLabel(
      /Send the new user an email about their account/i,
    );
    if (await sendEmailCheckbox.isVisible()) {
      await sendEmailCheckbox.uncheck();
    }

    await page.getByRole('button', { name: 'Add New User' }).click();

    await expect(page.getByRole('alert')).toContainText(/New user created/i);

    await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/users.php');
    await expect(page.getByRole('link', { name: username })).toBeVisible();
  });
});

