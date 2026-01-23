# Toán tử chia dư (%) - Modulo Operator

## Định nghĩa

Toán tử `%` (modulo) sẽ trả về **phần dư** của phép tính chia.

## Ví dụ cơ bản

```javascript
3 % 3 = 0    // Vì 3 chia hết cho 3, dư 0
3 % 2 = 1    // Vì 3 không chia hết cho 2, dư 1
3 % 1 = 0    // Vì 3 chia hết cho 1, dư 0
1 % 2 = 1    // Vì 1 không chia hết cho 2, dư 1
100 % 80 = 20 // Vì 100 không chia hết cho 80, dư 20
```

## Ứng dụng: Tìm số chẵn, số lẻ

### Số lẻ
- Nếu là số lẻ, chia dư cho 2 = 1
- Điều kiện: `x % 2 === 1`

```javascript
let x = 5;
if (x % 2 === 1) {
    console.log("Số lẻ");
}
// Output: "Số lẻ"
```

### Số chẵn
- Nếu là số chẵn, chia dư cho 2 = 0
- Điều kiện: `x % 2 === 0`

```javascript
let x = 4;
if (x % 2 === 0) {
    console.log("Số chẵn");
}
// Output: "Số chẵn"
```

## Các ứng dụng khác

### Kiểm tra chia hết
```javascript
// Kiểm tra x có chia hết cho y không
if (x % y === 0) {
    console.log(`${x} chia hết cho ${y}`);
}
```

### Lấy số cuối cùng của một số
```javascript
let number = 12345;
let lastDigit = number % 10;  // Kết quả: 5
```

### Tạo chu kỳ (cycle)
```javascript
// Tạo index lặp lại từ 0 đến n-1
let index = 0;
for (let i = 0; i < 10; i++) {
    let cycleIndex = i % 3;  // 0, 1, 2, 0, 1, 2, 0, 1, 2, 0
    console.log(cycleIndex);
}
```

### Kiểm tra năm nhuận
```javascript
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
```

## Lưu ý

- Toán tử `%` luôn trả về dấu của số bị chia (số đầu tiên)
- `-5 % 3 = -2` (không phải 1)
- `5 % -3 = 2` (dấu của số bị chia)
- Để lấy phần dư dương, có thể dùng: `((x % y) + y) % y`

## Ví dụ trong Playwright/JavaScript

```javascript
// Kiểm tra số lượng element là chẵn hay lẻ
const elements = await page.locator('.item').count();
if (elements % 2 === 0) {
    console.log('Số lượng element là chẵn');
} else {
    console.log('Số lượng element là lẻ');
}

// Lặp qua các element theo chu kỳ
for (let i = 0; i < 10; i++) {
    const cycleIndex = i % 3;  // 0, 1, 2, 0, 1, 2...
    // Sử dụng cycleIndex để xử lý logic
}
```
