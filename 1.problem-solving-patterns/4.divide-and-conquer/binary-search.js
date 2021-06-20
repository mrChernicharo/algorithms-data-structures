function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    logHelper(array, target, middle, left, right);

    if (array[middle] < target) left = middle + 1;
    else if (array[middle] > target) right = middle - 1;
    else return middle;
  }

  return -1;
}

// console.log(
//   binarySearch([1, 2, 4, 5, 7, 9, 11, 13, 15, 17, 18, 20, 21, 23, 26, 27], 11)
// );
console.log(
  binarySearch(
    [
      1, 2, 4, 5, 7, 9, 11, 13, 15, 17, 18, 20, 21, 23, 26, 27, 28, 29, 30, 31,
      32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50,
    ],
    2
  )
);

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
