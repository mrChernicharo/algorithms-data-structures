// MY IMPLEMENTATION + LOGGER FUNCTION

function binarySearch(arr, target) {
  let [left, right] = [0, arr.length - 1];

  while (left < right) {
    let middle = Math.round((left + right) / 2);

    logHelper(arr, target, middle, left, right);

    if (target === arr[middle]) return middle;
    if (target === arr[left]) return left;
    if (target === arr[right]) return right;

    if (target < arr[middle]) right = middle - 1;
    else if (target > arr[middle]) left = middle + 1;
  }
  return -1;
}
const test = [
  1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 26, 27,
  29, 30, 31, 33, 34, 35, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50,
];

// console.log(binarySearch(test, 49));
// console.log(binarySearch(test, 8));
console.log(binarySearch(test, 45));

function logHelper(arr, target, middle, left, right) {
  console.log({
    indexes: { middle, left, right },
    values: { min: arr[left], mid: arr[middle], max: arr[right] },
    searchValues: arr
      .filter((val, i) => i >= left && i <= right)
      .map((val) => {
        if (val === target) return `|${val}|`;
        if (val === arr[middle] || val === arr[left] || val === arr[right])
          return String(val);
        else return val;
      }),
  });
}
