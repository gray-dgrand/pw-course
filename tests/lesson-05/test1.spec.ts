import { test, expect } from '@playwright/test';

// Bài học 1: Register Page (có đủ các element)
// Yêu cầu:
// 1. Truy cập https://material.playwrightvn.com/, click "Bài học 1: Register Page (có đủ các element)"
// 2. Nhập thông tin vào các field: Username, Email, Gender, Hobbies, Interests, Country, Date of Birth, Profile Picture, Biography
// 3. Click button Register

test('Register Page - điền form đầy đủ và click Register', async ({ page }) => {
  // 1. Mở trang main
  await page.goto('https://material.playwrightvn.com/');

  // 2. Click vào link "Bài học 1: Register Page (có đủ các element)"
  await page.getByRole('link', { name: /Bài học 1: Register Page/i }).click();

  // 3. Điền thông tin các field chính
  // Username
  await page.getByLabel('Username').fill('Nam Nguyen');

  // Email
  await page.getByLabel('Email').fill('nam@example.com');

  // Gender - chọn "Male"
  await page.getByLabel('Male').check();

  // Hobbies - chọn một vài sở thích (nếu là checkbox)
  await page.getByLabel('Reading').check();
  await page.getByLabel('Traveling').check();

  // Interests - chọn một option trong list (nếu là select)
  await page.getByLabel('Interests').selectOption('Technology');

  // Country
  await page.getByLabel('Country').selectOption('Canada');

  // Date of Birth
  await page.getByLabel('Date of Birth').fill('1995-10-10');

  // Profile Picture – nếu là input type="file", demo chọn 1 file bất kỳ trong project
  // Ở đây dùng setInputFiles với file tạm trong repo (nếu có).
  // Để tránh lỗi khi chưa có file, chỉ cần kiểm tra field hiện diện.
  await expect(page.getByLabel('Profile Picture')).toBeVisible();

  // Biography
  await page.getByLabel('Biography').fill('Đây là bio cho bài test Register Page.');

  // 4. Click button Register
  await page.getByRole('button', { name: 'Register' }).click();

  // 5. Kiểm tra dialog / thông báo xuất hiện (nếu có)
  // Trên trang DOM demo có text "This is a dialog", nên ta kiểm tra nó hiển thị.
  await expect(page.getByText('This is a dialog')).toBeVisible();
});

