import { test, expect } from '@playwright/test';

// Bài học 3: Todo page
// Yêu cầu:
// a. Thêm mới 100 todo item có nội dung "Todo <i>"
// b. Xóa các todo có số lẻ

test('Todo page - thêm 100 todo và xóa các todo có số lẻ', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Mở trang Todo page
  await page.getByRole('link', { name: /Bài học 3: Todo page/i }).click();

  // Giả định có input để nhập todo và button "Add" hoặc tương tự.
  const input = page.getByPlaceholder('Enter a new todo');
  const addButton = page.getByRole('button', { name: /Add Todo|Add/i });

  // a. Thêm mới 100 todo item
  for (let i = 1; i <= 100; i++) {
    await input.fill(`Todo ${i}`);
    await addButton.click();
  }

  // Đảm bảo đã có đủ 100 item trong danh sách
  const allTodos = page.getByRole('listitem');
  await expect(allTodos).toHaveCount(100);

  // b. Xóa các todo có số lẻ
  for (let i = 1; i <= 100; i += 2) {
    const todoText = `Todo ${i}`;
    const todoItem = page.getByRole('listitem', { name: new RegExp(todoText) });

    // Giả định mỗi item có button Delete
    await todoItem.getByRole('button', { name: /Delete|Remove|X/i }).click();
  }

  // Sau khi xóa số lẻ, danh sách còn 50 item (các số chẵn)
  await expect(page.getByRole('listitem')).toHaveCount(50);
});

