# Thêm thuộc tính vào Object trong JavaScript

## Cách thêm thuộc tính mới vào object

Để thêm thuộc tính mới vào object, chúng ta chỉ cần dùng **dấu chấm (.)** hoặc **ngoặc vuông []** để định nghĩa thuộc tính mới.

## Cú pháp

### Cách 1: Dùng dấu chấm (Dot notation)

```javascript
object.propertyName = value;
```

### Cách 2: Dùng ngoặc vuông (Bracket notation)

```javascript
object["propertyName"] = value;
```

## Ví dụ

### Khởi tạo object ban đầu

```javascript
let bike = {
  make: 'Yamaha',
  model: 'YZF-R3'
};
```

### Thêm thuộc tính bằng dấu chấm

```javascript
bike.color = "Blue";
```

### Thêm thuộc tính bằng ngoặc vuông

```javascript
bike["price new"] = 100;
```

**Lưu ý**: Khi tên thuộc tính có khoảng trắng hoặc ký tự đặc biệt, **bắt buộc** phải dùng ngoặc vuông.

### Kết quả

```javascript
console.log(bike);
// Output: {make: 'Yamaha', model: 'YZF-R3', color: 'Blue', 'price new': 100}
```

---

## So sánh Dot notation vs Bracket notation

| Đặc điểm | Dot notation (.) | Bracket notation [] |
|----------|-------------------|---------------------|
| **Cú pháp** | `obj.property` | `obj["property"]` |
| **Tên thuộc tính** | Chỉ dùng được với tên hợp lệ (không có khoảng trắng, ký tự đặc biệt) | Dùng được với mọi tên (có thể có khoảng trắng, ký tự đặc biệt) |
| **Biến động** | Không thể dùng biến | Có thể dùng biến làm key |
| **Tốc độ** | Nhanh hơn một chút | Chậm hơn một chút |

---

## Các trường hợp sử dụng

### 1. Thêm thuộc tính đơn giản (dùng dấu chấm)

```javascript
const student = {
  name: "Alex",
  age: 20
};

student.city = "Hanoi";        // ✅ Dùng dấu chấm
student.email = "alex@example.com"; // ✅ Dùng dấu chấm

console.log(student);
// { name: "Alex", age: 20, city: "Hanoi", email: "alex@example.com" }
```

### 2. Thêm thuộc tính có khoảng trắng (dùng ngoặc vuông)

```javascript
const student = {
  name: "Alex"
};

student["full name"] = "Alex Nguyen";  // ✅ Phải dùng ngoặc vuông
student["date of birth"] = "2000-01-01"; // ✅ Phải dùng ngoặc vuông

console.log(student);
// { name: "Alex", "full name": "Alex Nguyen", "date of birth": "2000-01-01" }
```

### 3. Thêm thuộc tính động (dùng biến)

```javascript
const student = {
  name: "Alex"
};

const propertyName = "age";
student[propertyName] = 20;  // ✅ Dùng ngoặc vuông với biến

const key = "city";
student[key] = "Hanoi";       // ✅ Dùng ngoặc vuông với biến

console.log(student);
// { name: "Alex", age: 20, city: "Hanoi" }
```

### 4. Thêm thuộc tính từ vòng lặp

```javascript
const student = {
  name: "Alex"
};

const properties = {
  age: 20,
  city: "Hanoi",
  email: "alex@example.com"
};

// Thêm nhiều thuộc tính từ object khác
for (let key in properties) {
  student[key] = properties[key];  // ✅ Dùng ngoặc vuông với biến
}

console.log(student);
// { name: "Alex", age: 20, city: "Hanoi", email: "alex@example.com" }
```

### 5. Thêm thuộc tính với tên đặc biệt

```javascript
const config = {};

config["api-key"] = "12345";        // ✅ Tên có dấu gạch ngang
config["user.name"] = "admin";      // ✅ Tên có dấu chấm
config["2FA enabled"] = true;       // ✅ Tên bắt đầu bằng số và có khoảng trắng

console.log(config);
// { "api-key": "12345", "user.name": "admin", "2FA enabled": true }
```

---

## Cập nhật thuộc tính đã tồn tại

Cả hai cách đều có thể dùng để **cập nhật** thuộc tính đã tồn tại:

```javascript
const student = {
  name: "Alex",
  age: 20
};

// Cập nhật bằng dấu chấm
student.age = 21;

// Cập nhật bằng ngoặc vuông
student["age"] = 22;

console.log(student);
// { name: "Alex", age: 22 }
```

---

## Thêm thuộc tính vào object const

Như đã học ở bài trước, với `const` object, vẫn có thể thêm thuộc tính mới:

```javascript
const student = {
  name: "Alex"
};

student.age = 20;        // ✅ Hợp lệ
student["city"] = "Hanoi"; // ✅ Hợp lệ

// Không thể gán lại object mới
// student = { name: "Nagi" }; // ❌ Lỗi

console.log(student);
// { name: "Alex", age: 20, city: "Hanoi" }
```

---

## Lưu ý quan trọng

1. **Tên thuộc tính hợp lệ**: 
   - Dấu chấm chỉ dùng được với tên hợp lệ (chữ cái, số, `_`, `$`, không có khoảng trắng)
   - Ngoặc vuông dùng được với mọi tên (kể cả có khoảng trắng, ký tự đặc biệt)

2. **Dùng biến làm key**:
   - Chỉ có thể dùng ngoặc vuông khi key là biến
   - Dấu chấm không hỗ trợ biến

3. **Truy cập thuộc tính**:
   - Có thể truy cập thuộc tính đã thêm bằng cả hai cách
   ```javascript
   student.age;        // ✅ Dùng dấu chấm
   student["age"];     // ✅ Dùng ngoặc vuông
   ```

4. **Overwrite thuộc tính**:
   - Nếu thuộc tính đã tồn tại, giá trị sẽ bị ghi đè
   ```javascript
   const obj = { a: 1 };
   obj.a = 2;  // Ghi đè giá trị cũ
   console.log(obj); // { a: 2 }
   ```

---

## Ví dụ tổng hợp

```javascript
// Khởi tạo object
let bike = {
  make: 'Yamaha',
  model: 'YZF-R3'
};

// Thêm thuộc tính bằng dấu chấm
bike.color = "Blue";
bike.year = 2023;

// Thêm thuộc tính bằng ngoặc vuông (tên có khoảng trắng)
bike["price new"] = 100;
bike["owner name"] = "Alex";

// Thêm thuộc tính động
const property = "mileage";
bike[property] = 5000;

// Kết quả
console.log(bike);
// {
//   make: 'Yamaha',
//   model: 'YZF-R3',
//   color: 'Blue',
//   year: 2023,
//   'price new': 100,
//   'owner name': 'Alex',
//   mileage: 5000
// }
```

---

## Tóm tắt

- ✅ **Dấu chấm (.)**: Dùng cho tên thuộc tính hợp lệ, đơn giản
- ✅ **Ngoặc vuông []**: Dùng cho tên có khoảng trắng, ký tự đặc biệt, hoặc khi dùng biến
- ✅ Cả hai cách đều có thể thêm và cập nhật thuộc tính
- ✅ Có thể thêm thuộc tính vào object `const` (nhưng không thể gán lại object mới)
