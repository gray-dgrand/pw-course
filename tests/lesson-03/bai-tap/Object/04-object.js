// Bài tập 1: Tạo object car với thuộc tính make="Toyota", model="Corolla", và year=2021. Sau đó in ra năm sản xuất của xe.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log("Năm sản xuất:", car.year);

// Bài tập 2: Tạo object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
const person = {
    name: "Nguyễn Văn A",
    address: {
        street: "123 Đường ABC",
        city: "Hà Nội",
        country: "Việt Nam"
    }
};
console.log("Tên đường:", person.address.street);

// Bài tập 3: Tạo object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english.
const student = {
    name: "Nguyễn Văn B",
    grades: {
        math: 8.5,
        english: 7.5
    }
};
console.log("Điểm toán:", student["grades"]["math"]);

// Bài tập 4: Tạo object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.
const settings = {
    volume: 50,
    brightness: 80
};
settings.volume = 75;
console.log("Object settings sau khi thay đổi:", settings);

// Bài tập 5: Tạo object bike và sau đó thêm thuộc tính color vào object đó.
const bike = {
    make: "Yamaha",
    model: "YZF-R3"
};
bike.color = "Blue";
console.log("Object bike sau khi thêm color:", bike);

// Bài tập 6: Tạo object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này.
const employee = {
    name: "Nguyễn Văn C",
    age: 30
};
delete employee.age;
console.log("Object employee sau khi xóa age:", employee);

// Bài tập 7: Một trường học có các lớp học và học sinh như sau:
// classA: An, Bình, Châu
// classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// Khai báo tên biến: school
// Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
console.log("Object school:", school);
