function radixSort(arr)

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
