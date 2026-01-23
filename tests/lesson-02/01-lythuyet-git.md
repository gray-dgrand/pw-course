# Lý thuyết Git - Các lệnh cơ bản

## Giải thích các lệnh Git

### 1. `git init`

**Chức năng**: Khởi tạo một Git repository mới trong thư mục hiện tại.

**Giải thích chi tiết**:
- Tạo một thư mục `.git` ẩn trong thư mục hiện tại
- Thư mục `.git` chứa tất cả metadata và lịch sử commit của repository
- Sau khi chạy `git init`, thư mục hiện tại trở thành một Git repository
- Các file trong thư mục sẽ chuyển từ **vùng local** (chưa được Git quản lý) sang **working directory** (được Git theo dõi)

**Ví dụ**:
```bash
git init
# Khởi tạo repository trong thư mục hiện tại
```

**Kết quả**: Tạo file `.git/config` và các thư mục con trong `.git/` để quản lý repository.

---

### 2. `git add <file_name>`

**Chức năng**: Thêm một file cụ thể vào staging area (vùng staging).

**Giải thích chi tiết**:
- Di chuyển file từ **working directory** sang **staging area**
- File được đánh dấu là sẵn sàng để commit
- Chỉ file được chỉ định mới được thêm vào staging area
- Các file khác trong working directory không bị ảnh hưởng

**Ví dụ**:
```bash
git add README.md
# Chỉ thêm file README.md vào staging area

git add tests/example.spec.ts
# Thêm file example.spec.ts vào staging area
```

**Kết quả**: File được thêm vào staging area, sẵn sàng để commit.

---

### 3. `git add .`

**Chức năng**: Thêm tất cả các file đã thay đổi và file mới vào staging area.

**Giải thích chi tiết**:
- Dấu chấm (`.`) đại diện cho thư mục hiện tại và tất cả các thư mục con
- Thêm tất cả các file đã được chỉnh sửa (modified), file mới (untracked) vào staging area
- Không thêm các file đã bị xóa (deleted) - cần dùng `git add -A` hoặc `git add -u` để xử lý
- Rất hữu ích khi muốn commit nhiều file cùng lúc

**Ví dụ**:
```bash
git add .
# Thêm tất cả các file thay đổi trong thư mục hiện tại và các thư mục con vào staging area
```

**Lưu ý**:
- `git add .` chỉ thêm file trong thư mục hiện tại và các thư mục con
- `git add -A` hoặc `git add --all` thêm tất cả file bao gồm cả file đã xóa
- `git add -u` chỉ thêm các file đã được track và đã thay đổi

**Kết quả**: Tất cả các file thay đổi và file mới được thêm vào staging area.

---

### 4. `git commit -m "message"`

**Chức năng**: Tạo một commit mới với các file đã được thêm vào staging area, kèm theo một message mô tả.

**Giải thích chi tiết**:
- Di chuyển các file từ **staging area** sang **repository** (local repository)
- Tạo một snapshot (ảnh chụp) của trạng thái các file tại thời điểm commit
- Mỗi commit có một hash ID duy nhất để định danh
- Message (`-m "message"`) là mô tả ngắn gọn về những thay đổi trong commit này
- Sau khi commit, staging area sẽ trống (trừ khi có file mới được add)

**Ví dụ**:
```bash
git commit -m "Initial commit: Add Playwright tests"
# Tạo commit với message "Initial commit: Add Playwright tests"

git commit -m "Fix: Update test case for register page"
# Tạo commit với message mô tả việc sửa test case
```

**Best Practices cho commit message**:
- Viết message rõ ràng, ngắn gọn (khoảng 50-72 ký tự)
- Sử dụng động từ ở thì hiện tại: "Add", "Fix", "Update", "Remove"
- Mô tả được những gì đã thay đổi và tại sao (nếu cần)

**Kết quả**: Các file trong staging area được lưu vào repository với một commit mới kèm theo message.

---

## Tóm tắt luồng làm việc

```
Vùng Local (chưa có git)
    ↓ git init
Working Directory (đã được Git theo dõi)
    ↓ git add <file> hoặc git add .
Staging Area (file sẵn sàng commit)
    ↓ git commit -m "message"
Repository (đã được lưu vào lịch sử)
```

## Ví dụ thực tế

```bash
# Bước 1: Khởi tạo repository
git init

# Bước 2: Thêm các file vào staging area
git add .

# Bước 3: Tạo commit với message
git commit -m "Initial commit: Add Playwright project setup"

# Hoặc thêm từng file riêng lẻ
git add README.md
git add tests/example.spec.ts
git commit -m "Add README and example test file"
```
