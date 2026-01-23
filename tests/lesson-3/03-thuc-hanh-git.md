# Thực hành Git - Phân tích với .gitignore

## Tình huống

Giả sử có một folder mới `demo`. Hãy liệt kê các file **theo từng vùng** sau khi thực hiện một loạt các lệnh sau.

## Các bước thực hiện

1. Chạy lệnh: `git init`
2. Tạo file: `file1.txt`, `file2.txt`, `oops/file3.txt`
3. Tạo file `.gitignore` với nội dung:
   ```
   file1.txt
   oops/
   ```
4. Chạy lệnh: `git add .`
5. Chạy lệnh: `git commit -m"init project"`

---

## Phân tích chi tiết từng bước

### Sau bước 1: `git init`

**Vùng Local:**
- (rỗng - chưa có file nào)

**Working Directory:**
- (rỗng - chưa có file nào)

**Staging Area:**
- (rỗng)

**Repository:**
- (rỗng - chưa có commit nào)

**Commits:**
- (chưa có commit nào)

**Giải thích**: Sau khi chạy `git init`, Git repository được khởi tạo. Tuy nhiên, chưa có file nào được tạo nên tất cả các vùng đều rỗng.

---

### Sau bước 2: Tạo file `file1.txt`, `file2.txt`, `oops/file3.txt`

**Vùng Local:**
- file1.txt
- file2.txt
- oops/file3.txt

**Working Directory:**
- (rỗng - các file chưa được Git theo dõi vì chưa được add)

**Staging Area:**
- (rỗng)

**Repository:**
- (rỗng - chưa có commit nào)

**Commits:**
- (chưa có commit nào)

**Giải thích**: Sau khi tạo các file, chúng nằm trong vùng local (trên filesystem nhưng chưa được Git theo dõi). Các file này chưa được add vào Git nên chưa xuất hiện trong working directory của Git.

**Lưu ý**: Mặc dù đã có Git repository (đã chạy `git init`), nhưng các file mới tạo sẽ nằm trong vùng local cho đến khi được add vào Git.

---

### Sau bước 3: Tạo file `.gitignore` với nội dung `file1.txt` và `oops/`

**Vùng Local:**
- file1.txt (sẽ bị ignore)
- file2.txt
- oops/file3.txt (sẽ bị ignore vì trong thư mục `oops/`)
- .gitignore

**Working Directory:**
- (rỗng - chưa có file nào được add)

**Staging Area:**
- (rỗng)

**Repository:**
- (rỗng - chưa có commit nào)

**Commits:**
- (chưa có commit nào)

**Giải thích**: Sau khi tạo file `.gitignore` với nội dung:
- `file1.txt` - file này sẽ bị Git ignore
- `oops/` - toàn bộ thư mục `oops/` (bao gồm `file3.txt`) sẽ bị Git ignore

Tuy nhiên, các file vẫn còn trên filesystem (trong vùng local), chỉ là Git sẽ không theo dõi chúng khi chạy `git add`.

**Lưu ý**: `.gitignore` chỉ có hiệu lực khi Git cố gắng add các file. Ở bước này, chưa có file nào được add nên `.gitignore` chưa có tác dụng thực tế.

---

### Sau bước 4: `git add .`

**Vùng Local:**
- file1.txt (bị ignore, không được Git theo dõi)
- file2.txt (bị ignore về mặt Git, nhưng vẫn tồn tại trên filesystem)
- oops/file3.txt (bị ignore, không được Git theo dõi)
- .gitignore (được add vào Git)

**Working Directory:**
- .gitignore (được Git theo dõi)

**Staging Area:**
- .gitignore

**Repository:**
- (rỗng - chưa có commit nào)

**Commits:**
- (chưa có commit nào)

**Giải thích**: Khi chạy `git add .`, Git sẽ:
- ✅ **Add `.gitignore`**: File này không bị ignore nên được add vào staging area
- ❌ **Bỏ qua `file1.txt`**: Vì có trong `.gitignore`
- ✅ **Add `file2.txt`**: File này không có trong `.gitignore` nên được add... 

**Đợi đã!** Hãy kiểm tra lại `.gitignore`:
- `.gitignore` chứa: `file1.txt` và `oops/`
- `file2.txt` **KHÔNG** có trong `.gitignore` → sẽ được add
- `file1.txt` có trong `.gitignore` → bị ignore
- `oops/file3.txt` nằm trong thư mục `oops/` → bị ignore

Vậy sau `git add .`:
- `.gitignore` → được add vào staging area
- `file2.txt` → được add vào staging area
- `file1.txt` → bị ignore, không được add
- `oops/file3.txt` → bị ignore, không được add

**Vùng Local:**
- file1.txt (bị ignore, không được Git theo dõi)
- file2.txt (bị ignore về mặt Git, nhưng vẫn tồn tại trên filesystem)
- oops/file3.txt (bị ignore, không được Git theo dõi)
- .gitignore (được Git theo dõi)

**Working Directory:**
- .gitignore
- file2.txt

**Staging Area:**
- .gitignore
- file2.txt

**Repository:**
- (rỗng - chưa có commit nào)

**Commits:**
- (chưa có commit nào)

---

### Sau bước 5: `git commit -m"init project"`

**Vùng Local:**
- file1.txt (bị ignore, không được Git theo dõi)
- file2.txt (bị ignore về mặt Git, nhưng vẫn tồn tại trên filesystem)
- oops/file3.txt (bị ignore, không được Git theo dõi)
- .gitignore (được Git theo dõi)

**Working Directory:**
- .gitignore
- file2.txt

**Staging Area:**
- (rỗng - các file đã được commit)

**Repository:**
- .gitignore (trong commit "init project")
- file2.txt (trong commit "init project")

**Commits:**
- Commit 1: `"init project"` - chứa `.gitignore` và `file2.txt`

**Giải thích**: Lệnh `git commit` lấy tất cả các file trong staging area (`.gitignore` và `file2.txt`) và lưu vào repository với message "init project". 

Sau khi commit:
- Staging area trống
- Repository chứa commit "init project" với 2 file: `.gitignore` và `file2.txt`
- `file1.txt` và `oops/file3.txt` vẫn tồn tại trên filesystem nhưng không được Git theo dõi (bị ignore)

---

## Tóm tắt kết quả cuối cùng

Sau khi thực hiện tất cả các bước:

| Vùng | Các file |
|------|----------|
| **Vùng Local** | file1.txt, file2.txt, oops/file3.txt, .gitignore |
| **Working Directory** | .gitignore, file2.txt |
| **Staging Area** | (rỗng) |
| **Repository** | .gitignore, file2.txt (trong commit "init project") |

**Commits trong Repository:**
1. Commit 1: `"init project"` - chứa `.gitignore` và `file2.txt`

**Files bị ignore (không được Git theo dõi):**
- `file1.txt` - được liệt kê trực tiếp trong `.gitignore`
- `oops/file3.txt` - nằm trong thư mục `oops/` được liệt kê trong `.gitignore`

**Files được Git theo dõi:**
- `.gitignore` - file cấu hình, được commit
- `file2.txt` - không có trong `.gitignore`, được commit

## Bài học rút ra

1. **`.gitignore` có hiệu lực ngay**: Khi chạy `git add .`, các file/pattern trong `.gitignore` sẽ bị bỏ qua
2. **Pattern trong `.gitignore`**:
   - `file1.txt` - ignore file cụ thể
   - `oops/` - ignore toàn bộ thư mục và nội dung bên trong
3. **Files bị ignore vẫn tồn tại**: Chúng vẫn có trên filesystem, chỉ là Git không theo dõi chúng
4. **`.gitignore` cũng được commit**: File `.gitignore` là một file bình thường, cần được add và commit để có hiệu lực cho các thành viên khác trong team
5. **Kiểm tra trước khi add**: Nên kiểm tra `.gitignore` trước khi `git add .` để đảm bảo các file quan trọng không bị ignore nhầm

## Lưu ý quan trọng

- **file1.txt** và **oops/file3.txt** vẫn tồn tại trên filesystem nhưng **KHÔNG** được Git theo dõi
- Nếu muốn Git theo dõi các file này sau này, cần:
  1. Xóa pattern khỏi `.gitignore`
  2. Chạy `git add` để thêm chúng vào Git
  3. Commit các thay đổi
