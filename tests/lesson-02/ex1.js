// Bài tập khai báo biến và điều kiện

// a. Khai báo một hằng số number với giá trị là 12
const number = 12;

// b. Khai báo một biến name với giá trị là "my number"
let name = "my number";

// c. Khai báo một biến isEven với giá trị là sai (false)
let isEven = false;

// d. Kiểm tra nếu number là số chẵn, gán lại isEven thành giá trị đúng (true)
// Số chẵn khi chia dư cho 2 bằng 0
if (number % 2 === 0) {
    isEven = true;
}

// In kết quả để kiểm tra
console.log("Number:", number);
console.log("Name:", name);
console.log("Is Even:", isEven);
