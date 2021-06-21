// We can avoid unnecessary swaps checking if a smaller value has been found
// In case not, just skip the swap

function betterSelectiionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    let foundSmaller = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
        foundSmaller = true;
      }
    }

    if (foundSmaller) [arr[i], arr[lowest]] = swap([arr[i], arr[lowest]]);
  }
  return arr;
}
function swap([v1, v2]) {
  return [v2, v1];
}

console.log(betterSelectiionSort([23, -12, 20, -4, 4, 16]));

// TIME COMPLEXITY O(n^2)
