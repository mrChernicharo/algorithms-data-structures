// quickSort uses a pivot element, based in which the other values
// are "labeled" as smaller or grater than the pivot
// everytime we find a value smaller than the pivot we peform a swap, a passing this
// smaller value to the computed pivot's position to the left

// *note that the swap of the pivot only occur in the end of the iteration,
// while we're not done, we'll only keep track of what position our pivot should occupy.
// moving smaller elements found along the way into the computed pivot's position to the left

// *ideally the pivot should be a value in the middle, but it can be anywhere.
// For simplicity, we'll set our pivot to be the 1st element

// at the end of each iteration, the pivot will always be on it's final sorted place
// so our function pivot should only return an index,
// telling what's the correct position of the pivot in the array

// when our helper function 'pivot' returns the updated pivotIndex, we'll recursively
// call the pivot helper on the subarray to the left and to the right of that index

// our base case is when pivot is called on an array with length 1 or less

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// console.log(pivot([9, 4, 1, 8, 2, 3]));
console.log(quickSort([43, -23, 11, 21, 78, 1, 34]));

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
// 3,2,1    6,9,5
//     3      6
// 2,1      5   9
//   2
// 1

// TIME COMPLEXITY O(n log n) -> in worst case it can be O(n^2)
// SPACE COMPLEXITY O(log n)

// Quicksort might perform poorly if array is already sorted
// To prevent this, we should use a random or middle index to base our pivot
