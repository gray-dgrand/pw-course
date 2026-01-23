const heightInCm = 170;

const oddNumber = heightInCm % 100;
const idealWeight = (oddNumber * 9) / 10;
const maxWeight = oddNumber;
const minWeight = (oddNumber * 8) / 10;

console.log(idealWeight, maxWeight, minWeight);
