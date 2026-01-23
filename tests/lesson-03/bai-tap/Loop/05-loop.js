// Bài tập 1: Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1 đến 100:", sum);

// Bài tập 2: In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(""); // Dòng trống giữa các bảng
}

// Bài tập 3: Tạo một mảng chứa các số lẻ từ 1 đến 99
const oddNumbers = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        oddNumbers.push(i);
    }
}
console.log("Mảng các số lẻ từ 1 đến 99:", oddNumbers);

// Bài tập 4: In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user1@example.com, user2@example.com, ..., user10@example.com)
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

// Bài tập 5: Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. 
// Biết cấu trúc object của mảng doanh thu như sau: {"month": 2, "total": 100}
const revenue = [
    { month: 1, total: 150 },
    { month: 2, total: 200 },
    { month: 3, total: 180 },
    { month: 4, total: 220 },
    { month: 5, total: 250 },
    { month: 6, total: 300 },
    { month: 7, total: 280 },
    { month: 8, total: 320 },
    { month: 9, total: 290 },
    { month: 10, total: 350 },
    { month: 11, total: 380 },
    { month: 12, total: 400 }
];

let totalRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
    totalRevenue += revenue[i].total;
}
console.log("Tổng doanh thu 12 tháng:", totalRevenue);
