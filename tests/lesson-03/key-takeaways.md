# Key Takeaways - Lesson 3

## Tổng hợp kiến thức đã học

### Git: Checkout to any revision

#### Git Log - Xem lịch sử commit

Khi sử dụng lệnh `git log`, một danh sách các commit sẽ được hiển thị:

```bash
git log
```

**Ví dụ output:**
```
commit 1a9ddd69fa2106817b5a0c988285536cc5c204da (HEAD -> master, origin/master)
Author: User <user@example.com>
Date:   Mon Jan 20 10:30:00 2024
    feat: add example about configuration and topass

commit 070745d6c000d2a90740dcf97ee5db3f9418cc1f
Author: User <user@example.com>
Date:   Mon Jan 19 09:15:00 2024
    feat: init project
```

#### Commit Hash / Revision

- Phần được highlight (màu đỏ) trong output của `git log` được gọi là **commit hash** hoặc **revision**
- Mỗi commit có một hash duy nhất để định danh
- Hash là một chuỗi dài gồm các ký tự hex (0-9, a-f)
- Có thể sử dụng hash đầy đủ hoặc một phần đầu của hash (thường là 7 ký tự đầu)

**Ví dụ:**
- Hash đầy đủ: `070745d6c000d2a90740dcf97ee5db3f9418cc1f`
- Hash ngắn: `070745d`

#### Checkout to Revision

Để quay lại một revision cụ thể (quay ngược thời gian về trạng thái code trước đó), sử dụng lệnh:

```bash
git checkout <revision>
```

**Ví dụ:**
```bash
git checkout 070745d6c000d2a90740dcf97ee5db3f9418cc1f
```

Hoặc sử dụng hash ngắn:
```bash
git checkout 070745d
```

#### Lưu ý quan trọng

1. **Detached HEAD state**: Khi checkout về một commit cũ, bạn sẽ ở trạng thái "detached HEAD"
   - Đây là trạng thái chỉ đọc (read-only)
   - Có thể xem code nhưng không nên commit trực tiếp

2. **Quay lại branch hiện tại**: Để quay lại branch hiện tại (ví dụ: main hoặc master):
   ```bash
   git checkout main
   # hoặc
   git checkout master
   ```

3. **Tạo branch mới từ revision cũ**: Nếu muốn làm việc với code ở revision cũ:
   ```bash
   git checkout -b new-branch-name <revision>
   ```

#### Các lệnh Git liên quan

```bash
# Xem lịch sử commit (dạng compact)
git log --oneline

# Xem lịch sử commit với graph
git log --oneline --graph

# Xem thông tin chi tiết của một commit
git show <revision>

# Xem các file đã thay đổi trong một commit
git show --name-only <revision>

# Quay lại commit trước đó (HEAD~1)
git checkout HEAD~1

# Quay lại commit trước đó 2 lần (HEAD~2)
git checkout HEAD~2
```

#### Ứng dụng thực tế

- **Xem lại code ở một thời điểm cụ thể**: Khi cần xem code đã như thế nào ở một commit trước đó
- **Debug**: Khi cần tìm xem bug được introduce từ commit nào
- **So sánh**: So sánh code giữa các version khác nhau
- **Khôi phục file**: Lấy lại một file từ commit cũ mà không cần checkout toàn bộ

#### Ví dụ workflow

```bash
# 1. Xem lịch sử commit
git log --oneline

# Output:
# abc1234 feat: add new feature
# def5678 fix: bug in login
# ghi9012 feat: init project

# 2. Checkout về commit init project
git checkout ghi9012

# 3. Xem code ở thời điểm đó
# (có thể mở file, chạy code, etc.)

# 4. Quay lại branch hiện tại
git checkout main
```
