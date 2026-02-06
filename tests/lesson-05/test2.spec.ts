import { test, expect } from '@playwright/test';

// Bài học 2: Product page
// Yêu cầu:
// - Truy cập https://material.playwrightvn.com/, click "Bài học 2: Product page"
// - Thêm sản phẩm để giỏ hàng có số lượng:
//   a. Sản phẩm 1: 2 sản phẩm
//   b. Sản phẩm 2: 3 sản phẩm
//   c. Sản phẩm 3: 1 sản phẩm

test('Product page - thêm sản phẩm vào giỏ đúng số lượng', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Mở trang Product page
  await page.getByRole('link', { name: /Bài học 2: Product page/i }).click();

  // Thêm số lượng theo yêu cầu bằng cách click "Add to Cart" nhiều lần
  // Sản phẩm 1: 2 sản phẩm
  const product1 = page.getByText('Product 1').locator('..');
  await product1.getByRole('button', { name: 'Add to Cart' }).click();
  await product1.getByRole('button', { name: 'Add to Cart' }).click();

  // Sản phẩm 2: 3 sản phẩm
  const product2 = page.getByText('Product 2').locator('..');
  await product2.getByRole('button', { name: 'Add to Cart' }).click();
  await product2.getByRole('button', { name: 'Add to Cart' }).click();
  await product2.getByRole('button', { name: 'Add to Cart' }).click();

  // Sản phẩm 3: 1 sản phẩm
  const product3 = page.getByText('Product 3').locator('..');
  await product3.getByRole('button', { name: 'Add to Cart' }).click();

  // Kiểm tra giỏ hàng hiển thị đúng số lượng từng sản phẩm
  const cart = page.getByRole('table');

  const rowProduct1 = cart.getByRole('row', { name: /Product 1/ });
  await expect(rowProduct1.getByRole('cell', { name: '2' })).toBeVisible();

  const rowProduct2 = cart.getByRole('row', { name: /Product 2/ });
  await expect(rowProduct2.getByRole('cell', { name: '3' })).toBeVisible();

  const rowProduct3 = cart.getByRole('row', { name: /Product 3/ });
  await expect(rowProduct3.getByRole('cell', { name: '1' })).toBeVisible();
});

