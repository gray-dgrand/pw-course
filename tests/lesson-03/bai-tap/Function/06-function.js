// Bài tập 1: Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multiply(a, b) {
    const result = a * b;
    console.log(`${a} x ${b} = ${result}`);
    return result;
}

multiply(5, 3);
multiply(10, 7);

// Bài tập 2: Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}

const min1 = findMin(5, 2, 8);
console.log("Giá trị nhỏ nhất (5, 2, 8):", min1);

const min2 = findMin(10, 15, 7);
console.log("Giá trị nhỏ nhất (10, 15, 7):", min2);

// Bài tập 3: Viết hàm getTopStudents nhận 2 tham số:
// - students: mảng các object, mỗi object chứa name (tên) và score (điểm).
// - threshold: ngưỡng điểm để được coi là "top" (số).
// Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold. Gọi hàm với danh sách thực tế và in kết quả.
function getTopStudents(students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }
    return topStudents;
}

const students = [
    { name: "An", score: 8.5 },
    { name: "Bình", score: 7.0 },
    { name: "Châu", score: 9.0 },
    { name: "Đào", score: 6.5 },
    { name: "Hương", score: 8.0 }
];

const topStudents1 = getTopStudents(students, 8.0);
console.log("Học sinh có điểm >= 8.0:", topStudents1);

const topStudents2 = getTopStudents(students, 7.5);
console.log("Học sinh có điểm >= 7.5:", topStudents2);

// Bài tập 4: Viết hàm calculateInterest nhận 3 tham số:
// - principal: số tiền gửi ban đầu (số).
// - rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
// - years: số năm gửi.
// Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi đơn: 
// total = principal + principal * rate * years / 100. 
// Gọi hàm với ví dụ thực tế và in kết quả.
function calculateInterest(principal, rate, years) {
    const total = principal + principal * rate * years / 100;
    return total;
}

const total1 = calculateInterest(1000000, 5, 2);
console.log("Số tiền sau 2 năm (gốc: 1,000,000, lãi suất: 5%):", total1);

const total2 = calculateInterest(5000000, 7, 3);
console.log("Số tiền sau 3 năm (gốc: 5,000,000, lãi suất: 7%):", total2);
