// Math.abs is just for it to work with negative numbers

function getDigit(num, digit) {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  maxDigits = -Infinity;
  for (let num of arr) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));
console.log(getDigit(12345, 3));
console.log(getDigit(12345, 4));
console.log(getDigit(12345, 5)); // out of bounds

console.log(digitCount(12345));
console.log(digitCount(789));

console.log(mostDigits([23, 432, 1000001, 5431, 1, 32561]));
