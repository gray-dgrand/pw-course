# Object với const trong JavaScript

## Kiến thức cơ bản về const

### Với primitive types (kiểu nguyên thủy)

Khi dùng `const` (hằng số), giá trị sẽ không thay đổi được.

**Ví dụ:**
```javascript
const a = 10;
a = 15; // ❌ Lỗi: Assignment to constant variable
```

**Giải thích**: Biến `a` được khai báo bằng `const` nên không thể gán lại giá trị mới.

---

## Object với const

### 1. Không thể gán lại object mới (Reassignment)

Đối với object cũng vậy, nếu bạn thay cả object bằng một object mới, bạn cũng sẽ gặp lỗi.

**Ví dụ:**
```javascript
const student = {"name": "alex", "age": 20};
student = {"name": "Nagi", "age": 18}; // ❌ Lỗi: Assignment to constant variable
```

**Giải thích**: Biến `student` được khai báo bằng `const` nên không thể gán lại một object mới.

---

### 2. Có thể thay đổi thuộc tính của object (Property modification)

Tuy nhiên, nếu bạn chỉ thay đổi các thuộc tính của object thì hoàn toàn hợp lệ.

**Ví dụ:**
```javascript
const student = {"name": "alex", "age": 20};
student.name = "Nagi"; // ✅ Hợp lệ
console.log(student); // { name: "Nagi", age: 20 }
```

**Giải thích**: Mặc dù `student` là `const`, nhưng các thuộc tính bên trong object vẫn có thể thay đổi được.

---

## Ví dụ chi tiết

### Thay đổi nhiều thuộc tính
```javascript
const student = {"name": "alex", "age": 20};
student.name = "Nagi";     // ✅ Hợp lệ
student.age = 18;          // ✅ Hợp lệ
student.city = "Hanoi";    // ✅ Hợp lệ - có thể thêm thuộc tính mới
console.log(student);      // { name: "Nagi", age: 18, city: "Hanoi" }
```

### Xóa thuộc tính
```javascript
const student = {"name": "alex", "age": 20};
delete student.age;        // ✅ Hợp lệ - có thể xóa thuộc tính
console.log(student);      // { name: "alex" }
```

### Với array (cũng là object)
```javascript
const numbers = [1, 2, 3];
numbers[0] = 10;          // ✅ Hợp lệ - thay đổi phần tử
numbers.push(4);          // ✅ Hợp lệ - thêm phần tử mới
numbers.pop();            // ✅ Hợp lệ - xóa phần tử cuối
console.log(numbers);     // [10, 2, 3]
```

---

## Tại sao lại như vậy?

### Giải thích kỹ thuật

1. **`const` chỉ ngăn việc reassignment**: 
   - `const` đảm bảo biến luôn trỏ đến cùng một địa chỉ bộ nhớ (reference)
   - Không thể gán lại biến để trỏ đến địa chỉ khác

2. **Object là reference type**:
   - Khi khai báo `const student = {...}`, biến `student` trỏ đến một địa chỉ bộ nhớ
   - Các thuộc tính của object nằm ở địa chỉ đó
   - Thay đổi thuộc tính không làm thay đổi địa chỉ mà `student` trỏ đến

3. **So sánh với primitive types**:
   - Với primitive types (number, string, boolean), giá trị được lưu trực tiếp
   - Với objects, giá trị là địa chỉ tham chiếu đến object

---

## So sánh các trường hợp

| Hành động | Primitive với const | Object với const |
|-----------|---------------------|------------------|
| **Gán lại giá trị** | ❌ Lỗi | ❌ Lỗi |
| **Thay đổi thuộc tính** | N/A (không có thuộc tính) | ✅ Hợp lệ |
| **Thêm thuộc tính mới** | N/A | ✅ Hợp lệ |
| **Xóa thuộc tính** | N/A | ✅ Hợp lệ |

---

## Ví dụ trong thực tế

### Cập nhật thông tin user
```javascript
const user = {
    name: "Alex",
    email: "alex@example.com",
    age: 25
};

// Cập nhật tuổi
user.age = 26; // ✅ Hợp lệ

// Thêm thông tin mới
user.city = "Hanoi"; // ✅ Hợp lệ

// Không thể gán lại object mới
// user = { name: "Nagi" }; // ❌ Lỗi
```

### Làm việc với array
```javascript
const items = ["apple", "banana"];

// Thay đổi phần tử
items[0] = "orange"; // ✅ Hợp lệ

// Thêm phần tử
items.push("grape"); // ✅ Hợp lệ

// Không thể gán lại array mới
// items = ["new", "array"]; // ❌ Lỗi
```

---

## Lưu ý quan trọng

1. **`const` không làm object "immutable"**: 
   - `const` chỉ ngăn reassignment, không ngăn thay đổi nội dung object

2. **Nếu muốn object không thể thay đổi**:
   - Sử dụng `Object.freeze()` để đóng băng object
   ```javascript
   const student = Object.freeze({"name": "alex", "age": 20});
   student.name = "Nagi"; // Không có lỗi nhưng không thay đổi được
   console.log(student.name); // Vẫn là "alex"
   ```

3. **Best practice**:
   - Dùng `const` cho object khi không muốn gán lại object mới
   - Nhưng vẫn cho phép thay đổi thuộc tính khi cần
   - Nếu cần object hoàn toàn không đổi, dùng `Object.freeze()`

---

## Tóm tắt

- ✅ **Có thể**: Thay đổi thuộc tính của object được khai báo bằng `const`
- ✅ **Có thể**: Thêm/xóa thuộc tính của object được khai báo bằng `const`
- ❌ **Không thể**: Gán lại object mới cho biến được khai báo bằng `const`
- ❌ **Không thể**: Gán lại giá trị mới cho primitive type được khai báo bằng `const`
