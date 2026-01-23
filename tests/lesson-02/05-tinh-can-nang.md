# Tính các thông số sức khỏe dựa trên chiều cao

## Công thức tính

### 1. Cân nặng lý tưởng
```
Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) × 9 ÷ 10
```

### 2. Mức cân tối đa
```
Mức cân tối đa = Số lẻ của chiều cao (tính bằng cm)
```

### 3. Mức cân tối thiểu
```
Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) × 8 ÷ 10
```

## Ví dụ: Chiều cao 1.7m (170cm)

**Số lẻ của chiều cao:** 70 (phần sau dấu phẩy khi đổi sang cm)

- **Cân nặng lý tưởng:** 70 × 9 ÷ 10 = **63 kg**
- **Cân nặng tối đa:** **70 kg**
- **Cân nặng tối thiểu:** 70 × 8 ÷ 10 = **56 kg**

## Cách tính "Số lẻ của chiều cao"

Khi chiều cao là 1.7m (170cm):
- Chuyển sang cm: 170cm
- Lấy phần sau dấu phẩy: 70
- Hoặc: Chiều cao (cm) % 100 = 170 % 100 = 70

## Ví dụ code JavaScript

```javascript
// Chiều cao 1.7m = 170cm
const heightInCm = 170;
const oddNumber = heightInCm % 100; // 70

// Tính các thông số
const idealWeight = (oddNumber * 9) / 10;      // 63 kg
const maxWeight = oddNumber;                     // 70 kg
const minWeight = (oddNumber * 8) / 10;        // 56 kg

console.log("Cân nặng lý tưởng:", idealWeight, "kg");
console.log("Cân nặng tối đa:", maxWeight, "kg");
console.log("Cân nặng tối thiểu:", minWeight, "kg");
```

## Hàm tính toán tổng quát

```javascript
function calculateHealthParameters(heightInCm) {
    const oddNumber = heightInCm % 100;
    
    const idealWeight = (oddNumber * 9) / 10;
    const maxWeight = oddNumber;
    const minWeight = (oddNumber * 8) / 10;
    
    return {
        idealWeight: idealWeight,
        maxWeight: maxWeight,
        minWeight: minWeight
    };
}

// Sử dụng
const height = 170; // cm
const healthParams = calculateHealthParameters(height);

console.log("Chiều cao:", height, "cm");
console.log("Cân nặng lý tưởng:", healthParams.idealWeight, "kg");
console.log("Cân nặng tối đa:", healthParams.maxWeight, "kg");
console.log("Cân nặng tối thiểu:", healthParams.minWeight, "kg");
```

## Lưu ý

- Chiều cao cần được tính bằng **cm** (centimet)
- "Số lẻ của chiều cao" được tính bằng cách lấy phần dư khi chia cho 100: `heightInCm % 100`
- Ví dụ: 170cm → 170 % 100 = 70
- Ví dụ: 165cm → 165 % 100 = 65
- Ví dụ: 180cm → 180 % 100 = 80
