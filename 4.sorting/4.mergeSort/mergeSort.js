// arrays with 1 or zero items are naturaly sorted...
// merge sort takes advantage of that fact to continuously break the array into 2 smaller arrays

let iteration = 0;
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// merge is our helper function,
// which receives 2 sorted arrays and returns 1 merged and sorted arr made up with their values

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;

  result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  console.log({ arr1, arr2, result, iteration: iteration++ });

  return result;
}
// console.log(merge([1, 5, 11, 29, 30, 31], [2, 4, 10, 13]));
// console.log({ result: mergeSort([5, 16, -19, 24, 3, -6]) });
// console.log({ result: mergeSort([24, 10, 76, 73]) });
console.log({ result: mergeSort([24, -2, 10, 76, 2, 73, -28, 12]) });

//
//
//
//
// STEP 7.                                [10,24,73,76]
//
// STEP 1.                          mergeSort([24,10,76,73])
//
// STEP 5.                [10,24]         <-  merge  ->       [73,76]
//
// STEP 2.          mergeSort([10,24])                     mergeSort([76,73])
//
// STEP 4.     [24]  <- merge ->  [10]                   [76]  <- merge ->  [73]
//
// STEP 3.  mergeSort([24])     mergeSort([10])      mergeSort([76])        mergeSort([73])
//
//
//
//

// TIME COMPLEXITY O(n log n)
// SPACE COMPLEXITY O(n)

// an array with 8 elements will inflict 3 calls of mergeSort
// an array with 16 elements will inflict 4 calls of mergeSort
// an array with 32 elements will inflict 5 calls of mergeSort

// because it splits each time...so we have a relation of log n
// 2 of what power gives us n ?

// 32 == 2^5
// 16 == 2^4
// 8 == 2^3

// so we have [log n] decompositions (splits) + [n] comparisons per composition
