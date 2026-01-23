# Xóa thuộc tính của Object trong JavaScript

## Cách xóa thuộc tính của object

Để xóa một thuộc tính của object, chúng ta sử dụng toán tử `delete`.

## Cú pháp

```javascript
delete object.propertyName;
```

Hoặc với ngoặc vuông:

```javascript
delete object["propertyName"];
```

## Ví dụ cơ bản

### Khởi tạo object

```javascript
let employee = {
    name: 'Le Van C',
    age: 30,
    department: 'HR'
};
```

### Xóa thuộc tính

```javascript
delete employee.age;
```

### Kết quả

```javascript
console.log(employee);
// Output: {name: 'Le Van C', department: 'HR'}
```

Thuộc tính `age` đã được xóa khỏi object `employee`.

---

## Các cách xóa thuộc tính

### Cách 1: Dùng dấu chấm (Dot notation)

```javascript
const student = {
    name: "Alex",
    age: 20,
    city: "Hanoi"
};

delete student.age;
console.log(student);
// Output: { name: "Alex", city: "Hanoi" }
```

### Cách 2: Dùng ngoặc vuông (Bracket notation)

```javascript
const student = {
    name: "Alex",
    age: 20,
    "full name": "Alex Nguyen"
};

delete student["full name"];  // ✅ Phải dùng ngoặc vuông cho tên có khoảng trắng
console.log(student);
// Output: { name: "Alex", age: 20 }
```

### Cách 3: Xóa thuộc tính động (dùng biến)

```javascript
const student = {
    name: "Alex",
    age: 20,
    city: "Hanoi"
};

const propertyToDelete = "age";
delete student[propertyToDelete];  // ✅ Dùng ngoặc vuông với biến

console.log(student);
// Output: { name: "Alex", city: "Hanoi" }
```

---

## Giá trị trả về của `delete`

Toán tử `delete` trả về `true` nếu xóa thành công, `false` nếu không thể xóa.

```javascript
const obj = {
    prop1: "value1",
    prop2: "value2"
};

const result1 = delete obj.prop1;  // ✅ Xóa thành công
console.log(result1);  // true

const result2 = delete obj.nonExistent;  // Thuộc tính không tồn tại
console.log(result2);  // true (vẫn trả về true)

// Xóa thuộc tính không thể xóa (như thuộc tính của prototype)
const result3 = delete obj.toString;  // toString là method của Object.prototype
console.log(result3);  // true (nhưng không thực sự xóa được)
```

---

## Xóa nhiều thuộc tính

### Xóa từng thuộc tính một

```javascript
const student = {
    name: "Alex",
    age: 20,
    city: "Hanoi",
    email: "alex@example.com"
};

delete student.age;
delete student.city;

console.log(student);
// Output: { name: "Alex", email: "alex@example.com" }
```

### Xóa bằng vòng lặp

```javascript
const student = {
    name: "Alex",
    age: 20,
    city: "Hanoi",
    email: "alex@example.com"
};

const propertiesToDelete = ["age", "city"];

propertiesToDelete.forEach(prop => {
    delete student[prop];
});

console.log(student);
// Output: { name: "Alex", email: "alex@example.com" }
```

---

## Xóa thuộc tính trong object const

Với object được khai báo bằng `const`, vẫn có thể xóa thuộc tính:

```javascript
const student = {
    name: "Alex",
    age: 20,
    city: "Hanoi"
};

delete student.age;  // ✅ Hợp lệ
delete student["city"];  // ✅ Hợp lệ

console.log(student);
// Output: { name: "Alex" }

// Không thể gán lại object mới
// student = { name: "Nagi" }; // ❌ Lỗi
```

---

## Xóa thuộc tính nested (lồng nhau)

```javascript
const company = {
    name: "ABC Corp",
    address: {
        street: "123 Main St",
        city: "Hanoi",
        country: "Vietnam"
    }
};

delete company.address.city;
console.log(company);
// Output: {
//   name: "ABC Corp",
//   address: {
//     street: "123 Main St",
//     country: "Vietnam"
//   }
// }
```

---

## Lưu ý quan trọng

### 1. `delete` không xóa được thuộc tính của prototype

```javascript
const obj = {};

// toString là method của Object.prototype
delete obj.toString;  // Trả về true nhưng không xóa được

console.log(obj.toString);  // Vẫn còn: [Function: toString]
```

### 2. `delete` không xóa được biến

```javascript
let x = 10;
delete x;  // Trả về false, không xóa được

console.log(x);  // Vẫn là 10
```

### 3. `delete` không xóa được thuộc tính không thể cấu hình (non-configurable)

```javascript
// Tạo thuộc tính không thể cấu hình
const obj = {};
Object.defineProperty(obj, "prop", {
    value: "value",
    configurable: false
});

delete obj.prop;  // Trả về false trong strict mode, true trong non-strict mode
console.log(obj.prop);  // Vẫn còn: "value"
```

### 4. Kiểm tra thuộc tính có tồn tại sau khi xóa

```javascript
const obj = {
    prop: "value"
};

delete obj.prop;

console.log(obj.prop);  // undefined
console.log("prop" in obj);  // false
console.log(obj.hasOwnProperty("prop"));  // false
```

---

## So sánh các cách "xóa" thuộc tính

| Cách | Kết quả | Object có thuộc tính? |
|------|---------|------------------------|
| `delete obj.prop` | Xóa hoàn toàn | ❌ Không |
| `obj.prop = undefined` | Gán undefined | ✅ Có (giá trị là undefined) |
| `obj.prop = null` | Gán null | ✅ Có (giá trị là null) |

**Ví dụ:**

```javascript
const obj1 = { prop: "value" };
delete obj1.prop;
console.log("prop" in obj1);  // false

const obj2 = { prop: "value" };
obj2.prop = undefined;
console.log("prop" in obj2);  // true
console.log(obj2.prop);  // undefined

const obj3 = { prop: "value" };
obj3.prop = null;
console.log("prop" in obj3);  // true
console.log(obj3.prop);  // null
```

---

## Ví dụ tổng hợp

```javascript
// Khởi tạo object
let employee = {
    name: 'Le Van C',
    age: 30,
    department: 'HR',
    salary: 5000,
    'phone number': '0123456789'
};

// Xóa thuộc tính bằng dấu chấm
delete employee.age;

// Xóa thuộc tính bằng ngoặc vuông (tên có khoảng trắng)
delete employee["phone number"];

// Xóa thuộc tính động
const propToDelete = "salary";
delete employee[propToDelete];

// Kết quả
console.log(employee);
// Output: { name: 'Le Van C', department: 'HR' }

// Kiểm tra thuộc tính đã xóa
console.log(employee.age);  // undefined
console.log("age" in employee);  // false
```

---

## Tóm tắt

- ✅ **`delete object.property`**: Xóa thuộc tính khỏi object
- ✅ **Dùng dấu chấm**: Cho tên thuộc tính hợp lệ
- ✅ **Dùng ngoặc vuông**: Cho tên có khoảng trắng, ký tự đặc biệt, hoặc biến
- ✅ **Có thể xóa**: Thuộc tính của object `const`
- ✅ **Trả về**: `true` nếu xóa thành công (hoặc thuộc tính không tồn tại)
- ❌ **Không thể xóa**: Thuộc tính của prototype, biến, thuộc tính non-configurable
- ⚠️ **Lưu ý**: `delete` xóa hoàn toàn thuộc tính, khác với gán `undefined` hoặc `null`
