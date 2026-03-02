## Tổng hợp kiến thức buổi 6

- **Quy trình tạo branch**
  - Luôn `git checkout main` và `git pull origin main` trước khi tạo branch mới.
  - Đặt tên branch theo convention của lớp, ví dụ: `feat/lesson-06-namnv`.

- **Tạo pull request (PR)**
  - Commit và push code lên branch mới: `git push -u origin <branch-name>`.
  - Trên GitHub, tạo PR từ branch đó vào `main`.
  - Điền **Title** ngắn gọn, **Description** mô tả chi tiết thay đổi.
  - Thêm **Reviewers** (mentors/bạn học) và **Assignees** (chính mình).

- **Review code**
  - Vào tab **Files changed**, đọc kĩ từng dòng và thêm comment nếu thấy vấn đề.
  - Comment nên cụ thể: chỉ ra dòng code, giải thích lý do, và gợi ý cách sửa.

- **Fix comment & hoàn tất PR**
  - Sửa code theo comment hợp lý, commit & push thêm lên cùng branch.
  - Quay lại PR, bấm **Resolve conversation** cho các comment đã xử lý.
  - Nếu code OK, reviewer sẽ Approve và merge PR vào `main`.

