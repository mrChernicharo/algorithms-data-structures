// If we reverse the loop, that is, if we start from the end
// Bubble sort we'll do much less iterations

let iteration = 1;
function betterBubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    console.log(`---------- Upper Iteration #${iteration++} ------------`);

    for (let j = 0; j < i; j++) {
      console.log(arr);

      if (arr[j] > arr[j + 1]) {
        console.log(`Swap ${arr[j]} with ${arr[j + 1]}!`);
        [arr[j], arr[j + 1]] = swap([arr[j], arr[j + 1]]);
      }
    }
  }
  return arr;
}

function swap([v1, v2]) {
  return [v2, v1];
}
console.log(betterBubbleSort([43, 23, 58, 11, 6]));
