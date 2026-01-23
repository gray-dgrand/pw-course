# Lý thuyết Git - Các lệnh nâng cao

## Giải thích các lệnh Git

### 1. `git commit --amend`

**Chức năng**: Sửa đổi commit cuối cùng (commit gần nhất).

**Giải thích chi tiết**:
- Cho phép chỉnh sửa commit message hoặc thêm file vào commit cuối cùng
- Tạo một commit mới thay thế commit cũ (hash sẽ thay đổi)
- Hữu ích khi:
  - Quên thêm file vào commit
  - Muốn sửa commit message
  - Commit message bị sai chính tả

**Cách hoạt động**:
1. Nếu có file mới được add vào staging area, chúng sẽ được thêm vào commit cuối cùng
2. Mở editor để chỉnh sửa commit message (hoặc dùng `-m` để chỉ định message trực tiếp)
3. Tạo commit mới với hash mới, thay thế commit cũ

**Ví dụ**:
```bash
# Đã commit nhưng quên thêm file
git add forgotten-file.js
git commit --amend

# Hoặc chỉ muốn sửa message
git commit --amend
# Editor sẽ mở để chỉnh sửa message
```

**Lưu ý**:
- ⚠️ **KHÔNG** nên amend commit đã được push lên remote (đã share với người khác)
- Nếu đã push, cần force push: `git push --force` (nguy hiểm, cần cẩn thận)
- Commit hash sẽ thay đổi sau khi amend

---

### 2. `git commit --amend -m"<message>"`

**Chức năng**: Sửa đổi commit cuối cùng và chỉ định message mới trực tiếp (không mở editor).

**Giải thích chi tiết**:
- Tương tự `git commit --amend` nhưng không mở editor
- Cho phép chỉ định message mới ngay trong lệnh
- Tiện lợi khi chỉ muốn sửa message nhanh

**Ví dụ**:
```bash
# Commit với message sai
git commit -m "fix: bug in login"

# Sửa lại message
git commit --amend -m "fix: bug in login validation"

# Hoặc thêm file và sửa message cùng lúc
git add new-file.js
git commit --amend -m "feat: add new feature and include new-file.js"
```

**Lưu ý**:
- Tương tự `git commit --amend`, commit hash sẽ thay đổi
- Không nên dùng với commit đã push lên remote

---

### 3. `git restore --staged <file>`

**Chức năng**: Loại bỏ file khỏi staging area (unstage), đưa file trở lại working directory.

**Giải thích chi tiết**:
- Di chuyển file từ **staging area** về **working directory**
- File vẫn còn thay đổi, chỉ là không còn trong staging area nữa
- Hữu ích khi:
  - Add nhầm file vào staging area
  - Muốn unstage một số file trước khi commit
  - Muốn commit từng file một cách có chọn lọc

**Ví dụ**:
```bash
# Đã add nhiều file
git add file1.js file2.js file3.js

# Unstage file2.js (chỉ giữ file1.js và file3.js trong staging)
git restore --staged file2.js

# Unstage tất cả file trong staging area
git restore --staged .

# Hoặc dùng lệnh cũ (tương đương)
git reset HEAD file2.js
```

**Lưu ý**:
- File vẫn giữ nguyên thay đổi, chỉ là không còn trong staging area
- Khác với `git restore <file>` (không có `--staged`) - lệnh này sẽ **xóa thay đổi** trong working directory
- `git restore --staged` chỉ unstage, không xóa thay đổi

**So sánh**:
```bash
git restore --staged file.js    # Unstage file (giữ thay đổi)
git restore file.js              # Xóa thay đổi trong working directory (nguy hiểm!)
```

---

### 4. `git reset HEAD~1`

**Chức năng**: Xóa commit cuối cùng và đưa các thay đổi về staging area (hoặc working directory tùy vào option).

**Giải thích chi tiết**:
- `HEAD~1` nghĩa là commit trước HEAD (commit cuối cùng)
- Xóa commit cuối cùng khỏi lịch sử
- Có 3 mode chính:

#### a. `git reset --soft HEAD~1`
- Xóa commit cuối cùng
- Giữ các thay đổi trong **staging area**
- Có thể commit lại ngay

#### b. `git reset --mixed HEAD~1` (mặc định)
- Xóa commit cuối cùng
- Giữ các thay đổi trong **working directory** (unstage)
- Cần `git add` lại trước khi commit

#### c. `git reset --hard HEAD~1`
- ⚠️ **NGUY HIỂM**: Xóa commit cuối cùng
- **XÓA TẤT CẢ** thay đổi trong working directory
- Không thể khôi phục (trừ khi có backup)

**Ví dụ**:
```bash
# Xem lịch sử commit
git log --oneline
# abc1234 feat: add new feature
# def5678 fix: bug in login
# ghi9012 feat: init project

# Reset về commit trước (xóa commit abc1234)
git reset HEAD~1

# Sau lệnh trên:
# - Commit abc1234 bị xóa
# - Các thay đổi của commit abc1234 vẫn còn trong working directory (unstage)
# - HEAD trỏ về def5678

# Nếu muốn giữ trong staging area:
git reset --soft HEAD~1

# Nếu muốn xóa hoàn toàn (nguy hiểm):
git reset --hard HEAD~1
```

**Lưu ý**:
- ⚠️ **KHÔNG** nên reset commit đã push lên remote (đã share với người khác)
- `HEAD~1` = commit trước đó 1 lần
- `HEAD~2` = commit trước đó 2 lần
- `HEAD~3` = commit trước đó 3 lần, v.v.
- Có thể dùng hash thay vì `HEAD~1`: `git reset <commit-hash>`

**So sánh với các lệnh khác**:
```bash
git reset HEAD~1              # Xóa commit, giữ thay đổi trong working directory (unstage)
git reset --soft HEAD~1       # Xóa commit, giữ thay đổi trong staging area
git reset --hard HEAD~1       # Xóa commit, XÓA thay đổi (nguy hiểm!)
git revert HEAD               # Tạo commit mới để undo commit cuối (an toàn hơn)
```

---

## Tóm tắt

| Lệnh | Chức năng | Khi nào dùng |
|------|-----------|--------------|
| `git commit --amend` | Sửa commit cuối cùng | Quên thêm file, sửa message |
| `git commit --amend -m"msg"` | Sửa commit cuối cùng với message mới | Sửa message nhanh |
| `git restore --staged <file>` | Unstage file | Add nhầm file, muốn unstage |
| `git reset HEAD~1` | Xóa commit cuối cùng | Muốn xóa commit chưa push |

## Best Practices

1. **Chỉ amend/reset commit chưa push**: Tránh làm thay đổi lịch sử commit đã share
2. **Dùng `--soft` khi muốn giữ thay đổi**: `git reset --soft HEAD~1` an toàn hơn
3. **Tránh `--hard`**: `git reset --hard` xóa thay đổi vĩnh viễn
4. **Dùng `git revert` cho commit đã push**: An toàn hơn, tạo commit mới để undo
