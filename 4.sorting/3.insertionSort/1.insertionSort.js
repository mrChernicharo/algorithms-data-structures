// 1. Pick the second element in the array
// 2. Compare the 2nd element with the one before it and swap if necessary
// 3. Continue to the next element and if it is in the incorrect order,
// iterate through the sorted portion (left side) to place the element in the correct place
// 4. Repeat until array is sorted

function insertionSort(arr) {
  let i, j;
  for (i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// console.log(insertionSort([1, 6, 2, 19, 0, -10]));
console.log(insertionSort([6, 19, 2, -10]));

// Though its time complexity is O(n^2), this algorithm is good to sort almost sorted arrays
// And is also good if new data keeps comming in over time
