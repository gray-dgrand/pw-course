# Console.log() - In kết hợp giá trị chuỗi và biến

## Kiến thức cơ bản

### In giá trị chuỗi
```javascript
console.log("message");
// Output: message
```

### In giá trị của biến
```javascript
let name = "Nguyễn Nam";
console.log(name);
// Output: Nguyễn Nam
```

## Nối chuỗi với toán tử +

Để nối chuỗi từ hai biến, ta sử dụng dấu cộng (+):

```javascript
const str1 = "Hello";
const str2 = "Playwright Viet Nam";
console.log(str1 + str2); // HelloPlaywright Viet Nam
```

**Lưu ý**: Khi nối chuỗi, không có khoảng trắng tự động giữa các chuỗi. Nếu muốn có khoảng trắng, cần thêm vào:

```javascript
const str1 = "Hello";
const str2 = "Playwright Viet Nam";
console.log(str1 + " " + str2); // Hello Playwright Viet Nam
```

## In kết hợp chuỗi và biến

Để in ra kết hợp giá trị kiểu chuỗi và giá trị của biến, ta có **hai cách**:

### Cách 1: Dùng dấu cộng (+) - String Concatenation

```javascript
let name = "Nguyễn Nam";
console.log("Dùng dấu cộng như sau: " + name);
// Output: Dùng dấu cộng như sau: Nguyễn Nam
```

**Ưu điểm:**
- Tạo ra một chuỗi duy nhất
- Có thể kết hợp nhiều biến và chuỗi

**Ví dụ với nhiều biến:**
```javascript
let firstName = "Nguyễn";
let lastName = "Nam";
let age = 25;

console.log("Tên: " + firstName + " " + lastName + ", Tuổi: " + age);
// Output: Tên: Nguyễn Nam, Tuổi: 25
```

### Cách 2: Dùng dấu phẩy (,) - Multiple Arguments

```javascript
let name = "Nguyễn Nam";
console.log("Hoặc dùng dấu phẩy: ", name);
// Output: Hoặc dùng dấu phẩy:  Nguyễn Nam
```

**Ưu điểm:**
- Đơn giản, dễ đọc
- Tự động thêm khoảng trắng giữa các arguments
- Có thể in nhiều giá trị cùng lúc

**Ví dụ với nhiều biến:**
```javascript
let firstName = "Nguyễn";
let lastName = "Nam";
let age = 25;

console.log("Tên:", firstName, lastName, ", Tuổi:", age);
// Output: Tên: Nguyễn Nam , Tuổi: 25
```

## Template Literals (ES6) - Cách hiện đại

Ngoài hai cách trên, JavaScript ES6 còn cung cấp **Template Literals** (Template Strings):

```javascript
let name = "Nguyễn Nam";
let age = 25;

console.log(`Tên: ${name}, Tuổi: ${age}`);
// Output: Tên: Nguyễn Nam, Tuổi: 25
```

**Ưu điểm:**
- Dễ đọc và viết
- Có thể xuống dòng trong chuỗi
- Có thể thực hiện biểu thức JavaScript bên trong `${}`

**Ví dụ với biểu thức:**
```javascript
let a = 5;
let b = 3;

console.log(`Tổng của ${a} và ${b} là: ${a + b}`);
// Output: Tổng của 5 và 3 là: 8
```

## So sánh các cách

| Cách | Cú pháp | Ưu điểm | Nhược điểm |
|------|---------|---------|------------|
| **Dấu cộng (+)** | `"Text " + variable` | Tạo chuỗi duy nhất | Phức tạp với nhiều biến |
| **Dấu phẩy (,)** | `"Text", variable` | Đơn giản, dễ đọc | Tự động thêm khoảng trắng |
| **Template Literals** | `` `Text ${variable}` `` | Hiện đại, linh hoạt | Cần ES6+ |

## Ví dụ trong Playwright/Test Automation

### Debug trong test
```javascript
test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  
  const title = await page.title();
  console.log("Title của trang là: " + title);
  // Hoặc
  console.log("Title của trang là:", title);
  // Hoặc
  console.log(`Title của trang là: ${title}`);
});
```

### In kết quả kiểm tra
```javascript
test('check elements', async ({ page }) => {
  const count = await page.locator('.item').count();
  
  console.log("Số lượng elements: " + count);
  console.log("Số lượng elements:", count);
  console.log(`Số lượng elements: ${count}`);
  
  if (count > 0) {
    console.log("Test passed với " + count + " elements");
  }
});
```

### In nhiều giá trị cùng lúc
```javascript
test('multiple values', async ({ page }) => {
  const url = page.url();
  const title = await page.title();
  const count = await page.locator('button').count();
  
  // Cách 1: Dùng dấu cộng
  console.log("URL: " + url + ", Title: " + title + ", Buttons: " + count);
  
  // Cách 2: Dùng dấu phẩy
  console.log("URL:", url, ", Title:", title, ", Buttons:", count);
  
  // Cách 3: Template Literals (khuyên dùng)
  console.log(`URL: ${url}, Title: ${title}, Buttons: ${count}`);
});
```

## Lưu ý

- Dấu cộng (`+`) sẽ chuyển đổi số thành chuỗi khi kết hợp với chuỗi
- Dấu phẩy (`,`) giữ nguyên kiểu dữ liệu của từng argument
- Template Literals (`${}`) có thể chứa biểu thức JavaScript
- `console.log()` có thể nhận nhiều arguments, mỗi argument sẽ được in ra cách nhau bởi khoảng trắng
