## Tổng hợp kiến thức buổi 5

- **DOM & selector cơ bản**
  - DOM là mô hình cây đại diện cho cấu trúc HTML của trang web.
  - Mỗi phần tử (element) có thể được truy cập thông qua **selector** (CSS selector, XPath…).
  - Khi viết automation test, việc chọn đúng phần tử là bước quan trọng nhất.

- **DOM table**
  - Bảng HTML được tạo bởi các thẻ `table`, `thead`, `tbody`, `tr`, `th`, `td`.
  - Mỗi hàng là một thẻ `tr`, bên trong chứa nhiều ô `td`/`th`.
  - Có thể dùng selector theo **hàng** và **cột** để lấy ra đúng ô dữ liệu cần kiểm tra.

- **Hàm `text()` trong XPath**
  - `text()` dùng để tìm phần tử có **nội dung text chính xác**.
  - Ví dụ: `//div[text()='This is a text']` → chọn thẻ `div` có nội dung **đúng y** `"This is a text"`.
  - Thường dùng khi text **cố định, không thay đổi**.

- **Hàm `contains()` trong XPath**
  - `contains(text(), 'abc')` dùng để tìm phần tử có text **chứa** chuỗi `'abc'`.
  - Hữu ích khi text có thể thay đổi nhẹ (thêm thời gian, ký tự, khoảng trắng…).
  - Ví dụ:
    - `//div[contains(text(), 'Tôi là Alex')]` → chỉ cần đoạn text chứa `"Tôi là Alex"`.
    - `//div[contains(text(), 'Bây giờ là:')]` → bỏ qua phần thời gian phía sau.

- **Khi nào dùng `text()` vs `contains()`**
  - Dùng **`text()`** khi nội dung text **cố định** và bạn muốn so khớp **chính xác**.
  - Dùng **`contains()`** khi text có thể thay đổi (thêm giờ phút, số liệu, khoảng trắng…), chỉ cần khớp **một phần quan trọng**.

