## Tổng hợp kiến thức buổi 8

- **Git – nhánh mặc định**
  - Trước đây, khi `git init` nhánh mặc định là `master`.
  - Hiện nay thường đổi sang `main` bằng lệnh:
    - `git config --global init.defaultBranch main`
  - Từ đó, mọi repo mới khi `git init` sẽ dùng nhánh `main` là mặc định.

- **Quy ước làm bài với branch**
  - Tổng hợp kiến thức: dùng branch `feat/lesson-8-key-takeaways-namnv`.
  - Bài tập test Playwright: dùng branch `feat/lesson-8-namnv`.
  - Luôn checkout từ `main` và `git pull origin main` trước khi tạo branch mới.

- **Quy ước đặt tên file test case**
  - Mỗi module test được viết trong một file.
  - Tên file: `${module-name}.spec.ts`.
  - Tên group (`describe`): `${module-code} - ${module-name}`.
  - Tên test (`test`): `${case-code}: ${case name}`.

