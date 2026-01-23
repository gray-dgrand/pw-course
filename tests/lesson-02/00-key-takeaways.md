# Key Takeaways - Lesson 02

## Tổng hợp kiến thức đã học

### 1. Khởi tạo dự án Playwright

- Sử dụng `npm init playwright@latest` để khởi tạo dự án Playwright mới
- Cấu trúc dự án bao gồm:
  - `package.json`: Quản lý dependencies và scripts
  - `playwright.config.ts`: File cấu hình Playwright
  - `tsconfig.json`: Cấu hình TypeScript
  - `tests/`: Thư mục chứa các test files
  - `.gitignore`: Loại trừ các file không cần thiết khỏi git

### 2. Viết Test Cases với Playwright

#### Test 'has title'
- Sử dụng `page.goto()` để điều hướng đến một URL
- Sử dụng `expect(page).toHaveTitle()` để kiểm tra title của trang web
- Có thể sử dụng regex pattern để kiểm tra title chứa một đoạn text cụ thể

```typescript
test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});
```

#### Test 'get started link'
- Sử dụng `page.getByRole()` để tìm elements theo role (link, heading, button, etc.)
- Sử dụng `name` option với regex để tìm element chứa text cụ thể
- Sử dụng `.click()` để thực hiện click action
- Sử dụng `expect().toBeVisible()` để kiểm tra element có hiển thị trên trang

```typescript
test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: /Bài học 1: Register Page/ }).click();
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
```

### 3. Locators trong Playwright

- **getByRole()**: Tìm element theo role (link, heading, button, textbox, etc.)
  - `page.getByRole('link', { name: /text/ })` - Tìm link chứa text
  - `page.getByRole('heading', { name: 'text' })` - Tìm heading với text chính xác
  
- Các locator methods khác:
  - `page.getByText()` - Tìm theo text content
  - `page.getByLabel()` - Tìm theo label
  - `page.getByPlaceholder()` - Tìm theo placeholder
  - `page.getByTestId()` - Tìm theo test-id attribute

### 4. Assertions trong Playwright

- `expect(page).toHaveTitle()` - Kiểm tra title của trang
- `expect(element).toBeVisible()` - Kiểm tra element có hiển thị
- `expect(element).toHaveText()` - Kiểm tra text content
- `expect(element).toBeEnabled()` - Kiểm tra element có enabled
- Tất cả assertions đều là async và cần await

### 5. Quản lý Git và GitHub

#### Các vùng trong Git

Trong bài học, chúng ta đã tìm hiểu về các vùng trong Git:

1. **Working Directory** (Thư mục làm việc): Nơi chứa các file đang được chỉnh sửa
2. **Staging Area** (Vùng staging): Nơi chuẩn bị các file trước khi commit
3. **Repository** (Local Repository): Nơi lưu trữ các commit đã được thực hiện

#### Quy ước về "Vùng Local" (Classroom Convention)

Để làm bài dễ hơn, lớp học quy ước thêm một vùng mới: **Vùng Local**

- **Vùng Local**: Là vùng khi một thư mục **chưa được khởi tạo git** (chưa gõ lệnh `git init`)
  - Lúc này, tất cả các file sẽ nằm ở trong vùng local
  - Sau khi chạy `git init`, file sẽ di chuyển từ vùng local vào vùng **working directory**
  
**Lưu ý**: Quy ước này chỉ có phạm vi trong lớp học, không phải là khái niệm chính thức của Git.

#### Khởi tạo Git repository
```bash
git init          # Chuyển file từ vùng local → working directory
git add .         # Chuyển file từ working directory → staging area
git commit -m "Initial commit"  # Chuyển file từ staging area → repository
git branch -M main
```

#### Kết nối với GitHub
```bash
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

#### Cập nhật remote URL
```bash
git remote set-url origin https://github.com/USERNAME/REPO.git
```

### 6. Mời Collaborator vào GitHub Repository

- Vào Settings > Collaborators trong repository
- Click "Add people" hoặc "Invite a collaborator"
- Nhập GitHub username và chọn quyền (thường là Write)
- Collaborator sẽ nhận email invitation

### 7. Chạy Tests

```bash
# Chạy tất cả tests
npm test

# Chạy tests với UI mode (interactive)
npm run test:ui

# Xem test report
npx playwright show-report
```

### 8. Best Practices

- Đặt tên test rõ ràng, mô tả được hành vi đang test
- Sử dụng comments để giải thích các bước trong test
- Sử dụng locators ưu tiên theo thứ tự: role > text > test-id > CSS/XPath
- Luôn sử dụng async/await với Playwright APIs
- Commit code thường xuyên với message rõ ràng
