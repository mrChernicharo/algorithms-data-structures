// 1. store the first element as the smallest value you've seen so far
// 2. compre this item to the next item in the array until you find a smaller number
// 3. if smaller a number is found, assign this smaller number to be the new "minimum" and continue until the end of the array

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }

    [arr[i], arr[lowest]] = swap([arr[i], arr[lowest]]);
  }
  return arr;
}
function swap([v1, v2]) {
  return [v2, v1];
}

console.log(selectionSort([23, -12, 20, -4, 4, 16]));
