// Bài tập: Kiểm tra và sửa lỗi code

// ĐOẠN CODE GỐC (CÓ LỖI):
// const myName = "Alex";
// myName = "Nagi";  // ❌ LỖI: Không thể gán lại giá trị cho biến const
// console.log(myName);

// PHÂN TÍCH LỖI:
// - Biến được khai báo bằng `const` là hằng số, không thể thay đổi giá trị sau khi khai báo
// - Dòng `myName = "Nagi";` sẽ gây lỗi: "TypeError: Assignment to constant variable"
// - Để có thể gán lại giá trị, cần sử dụng `let` thay vì `const`


let myName = "Alex";
myName = "Nagi";
console.log(myName);
