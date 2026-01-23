# Thực hành Git - Phân tích các vùng

## Tình huống

Giả sử một folder mới `demo` được tạo ra. Hãy liệt kê các file **theo từng vùng** và liệt kê các commit tương ứng cùng message sau khi thực hiện một loạt các lệnh sau.

**Lưu ý**: Hãy suy nghĩ trong đầu để ra được kết quả, không chạy lệnh trên máy thật. Điều này sẽ giúp bạn hiểu Git rõ ràng hơn và nhớ lâu hơn.

## Các bước thực hiện

a. Tạo 3 file: file1, file2, file3
b. Chạy lệnh: `git init`
c. Chạy lệnh: `git commit -m"init project"`
d. Chạy lệnh: `git add file1`
e. Chạy lệnh: `git commit -m"add file"`
f. Chạy lệnh: `git add .`
g. Chạy lệnh: `git restore --staged file2`
h. Chạy lệnh: `git commit -m"add all files"`
i. Chạy lệnh: `git reset HEAD~1`

---

## Phân tích chi tiết từng bước

### Sau bước a: Tạo 3 file (file1, file2, file3)

**Vùng Local:**
- file1
- file2
- file3

**Working Directory:**
- (rỗng - chưa có git)

**Staging Area:**
- (rỗng - chưa có git)

**Repository:**
- (rỗng - chưa có git)

**Commits:**
- (chưa có commit nào)

**Giải thích**: Khi folder mới được tạo và chưa chạy `git init`, tất cả các file nằm trong vùng local (chưa được Git quản lý).

---

### Sau bước b: `git init`

**Vùng Local:**
- (rỗng - các file đã chuyển sang working directory)

**Working Directory:**
- file1
- file2
- file3

**Staging Area:**
- (rỗng)

**Repository:**
- (rỗng - chưa có commit nào)

**Commits:**
- (chưa có commit nào)

**Giải thích**: Sau khi chạy `git init`, Git bắt đầu theo dõi thư mục. Các file từ vùng local chuyển sang working directory. Tuy nhiên, các file này chưa được add vào staging area nên chưa sẵn sàng để commit.

---

### Sau bước c: `git commit -m"init project"`

**Vùng Local:**
- (rỗng)

**Working Directory:**
- file1
- file2
- file3

**Staging Area:**
- (rỗng)

**Repository:**
- (rỗng - không có commit nào được tạo)

**Commits:**
- (không có commit nào)

**Giải thích**: Lệnh `git commit` sẽ **KHÔNG THỂ** thực hiện được vì không có file nào trong staging area. Git sẽ báo lỗi: "nothing to commit, working tree clean" hoặc "no changes added to commit". 

Để commit được, cần phải `git add` các file vào staging area trước. Do đó, sau bước này, không có gì thay đổi so với bước b.

---

### Sau bước d: `git add file1`

**Vùng Local:**
- (rỗng)

**Working Directory:**
- file2
- file3

**Staging Area:**
- file1

**Repository:**
- (rỗng - chưa có commit nào)

**Commits:**
- (không có commit nào)

**Giải thích**: Lệnh `git add file1` di chuyển file1 từ working directory sang staging area. File1 giờ đã sẵn sàng để commit. File2 và file3 vẫn còn trong working directory, chưa được add.

---

### Sau bước e: `git commit -m"add file"`

**Vùng Local:**
- (rỗng)

**Working Directory:**
- file2
- file3

**Staging Area:**
- (rỗng - file1 đã được commit)

**Repository:**
- file1 (trong commit "add file")

**Commits:**
- Commit 1: `"add file"` - chứa file1

**Giải thích**: Lệnh `git commit` lấy file1 từ staging area và lưu vào repository với message "add file". Sau khi commit, staging area trống. File2 và file3 vẫn còn trong working directory, chưa được add và commit.

---

### Sau bước f: `git add .`

**Vùng Local:**
- (rỗng)

**Working Directory:**
- (rỗng - tất cả file đã được add)

**Staging Area:**
- file2
- file3

**Repository:**
- file1 (trong commit "add file")

**Commits:**
- Commit 1: `"add file"` - chứa file1

**Giải thích**: Lệnh `git add .` thêm tất cả các file còn lại trong working directory (file2 và file3) vào staging area. Giờ file2 và file3 đã sẵn sàng để commit.

---

### Sau bước g: `git restore --staged file2`

**Vùng Local:**
- (rỗng)

**Working Directory:**
- file2

**Staging Area:**
- file3

**Repository:**
- file1 (trong commit "add file")

**Commits:**
- Commit 1: `"add file"` - chứa file1

**Giải thích**: Lệnh `git restore --staged file2` loại bỏ file2 khỏi staging area và đưa nó trở lại working directory. File2 vẫn giữ nguyên thay đổi, chỉ là không còn trong staging area nữa. Chỉ còn file3 trong staging area.

---

### Sau bước h: `git commit -m"add all files"`

**Vùng Local:**
- (rỗng)

**Working Directory:**
- file2

**Staging Area:**
- (rỗng - file3 đã được commit)

**Repository:**
- file1 (trong commit "add file")
- file3 (trong commit "add all files")

**Commits:**
- Commit 1: `"add file"` - chứa file1
- Commit 2: `"add all files"` - chứa file3

**Giải thích**: Lệnh `git commit` lấy file3 từ staging area (file duy nhất còn lại trong staging) và lưu vào repository với message "add all files". Sau khi commit, staging area trống. File2 vẫn còn trong working directory, chưa được commit.

---

### Sau bước i: `git reset HEAD~1`

**Vùng Local:**
- (rỗng)

**Working Directory:**
- file2
- file3 (được restore từ commit cuối)

**Staging Area:**
- (rỗng)

**Repository:**
- file1 (trong commit "add file")

**Commits:**
- Commit 1: `"add file"` - chứa file1

**Giải thích**: Lệnh `git reset HEAD~1` (mặc định là `--mixed`) xóa commit cuối cùng (commit "add all files"). 

- Commit "add all files" bị xóa khỏi lịch sử
- File3 (file trong commit bị xóa) được restore về working directory với trạng thái unstage
- File2 vẫn còn trong working directory như cũ
- Chỉ còn lại commit "add file" trong repository

**Lưu ý**: `git reset HEAD~1` mặc định là `--mixed`, nghĩa là:
- Xóa commit cuối cùng
- Giữ các thay đổi trong working directory (unstage)
- Không giữ trong staging area

---

## Tóm tắt kết quả cuối cùng

Sau khi thực hiện tất cả các bước:

| Vùng | Các file |
|------|----------|
| **Vùng Local** | (rỗng) |
| **Working Directory** | file2, file3 |
| **Staging Area** | (rỗng) |
| **Repository** | file1 (đã được commit) |

**Commits trong Repository:**
1. Commit 1: `"add file"` - chứa file1

**Kết luận:**
- **file1**: Đã được commit trong commit "add file"
- **file2**: Vẫn còn trong working directory, chưa được commit
- **file3**: Đã được commit nhưng sau đó bị xóa khỏi lịch sử do `git reset HEAD~1`, hiện đang ở working directory

## Bài học rút ra

1. **Không thể commit khi staging area rỗng**: Cần `git add` trước khi `git commit`
2. **`git restore --staged`**: Chỉ unstage file, không xóa thay đổi
3. **`git reset HEAD~1`**: Xóa commit cuối cùng và restore các file về working directory
4. **Lịch sử commit có thể thay đổi**: `git reset` có thể xóa commit khỏi lịch sử
5. **Cẩn thận với `git reset`**: Đặc biệt là `--hard` sẽ xóa thay đổi vĩnh viễn
