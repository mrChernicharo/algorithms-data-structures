// With bubble sort at the end of each iteration,
// We're guaranteed to have the highest value at the end

function naiveBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`---------- Upper Iteration #${i + 1} ------------`);

    for (let j = 0; j < arr.length; j++) {
      console.log(arr);

      if (arr[j] > arr[j + 1]) {
        console.log(`Swap ${arr[j]} with ${arr[j + 1]}`);
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        [arr[j], arr[j + 1]] = swap([arr[j], arr[j + 1]]);
      }
    }
  }
  return arr;
}

function swap([v1, v2]) {
  return [v2, v1];
}
console.log(naiveBubbleSort([43, 23, 58, 11, 6]));
