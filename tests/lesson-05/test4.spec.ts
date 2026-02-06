import { test, expect } from '@playwright/test';

// Bài học 4: Personal notes
// Yêu cầu:
// a. Thêm mới 10 note với nội dung như bảng trong slide.
//    - Field "Title": điền nội dung cột "Tên action"
//    - Field "Content": điền nội dung cột "Mô tả"
// b. Thực hiện search với keyword "một hoặc nhiều"

type Note = {
  title: string;
  content: string;
};

const NOTES: Note[] = [
  {
    title: 'click',
    content: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web',
  },
  {
    title: 'fill',
    content: 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web',
  },
  {
    title: 'type',
    content: 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng',
  },
  {
    title: 'hover',
    content: 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover',
  },
  {
    title: 'check',
    content: 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked',
  },
  {
    title: 'uncheck',
    content: 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked',
  },
  {
    title: 'selectOption',
    content:
      'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown',
  },
  {
    title: 'press',
    content:
      'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác',
  },
  {
    title: 'dblclick',
    content:
      'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web',
  },
  {
    title: 'dragAndDrop',
    content:
      'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web',
  },
];

test('Personal notes - thêm 10 note và search "một hoặc nhiều"', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Mở trang Personal notes
  await page.getByRole('link', { name: /Bài học 4: Personal notes/i }).click();

  const titleInput = page.getByLabel('Title');
  const contentInput = page.getByLabel('Content');
  const addButton = page.getByRole('button', { name: /Add Note|Add/i });

  // a. Thêm 10 note
  for (const note of NOTES) {
    await titleInput.fill(note.title);
    await contentInput.fill(note.content);
    await addButton.click();
  }

  // Kiểm tra bảng hiển thị đủ 10 note
  const rows = page.getByRole('row').filter({ hasText: /click|fill|type|hover|check|uncheck|selectOption|press|dblclick|dragAndDrop/ });
  await expect(rows).toHaveCount(10);

  // b. Search với keyword "một hoặc nhiều"
  await page.getByLabel('Search Notes').fill('một hoặc nhiều');

  // Kết quả mong đợi: chỉ còn lại note của action "selectOption"
  const resultRows = page.getByRole('row').filter({ hasText: 'selectOption' });
  await expect(resultRows).toHaveCount(1);
  await expect(resultRows.first()).toContainText('một hoặc nhiều option');
});

