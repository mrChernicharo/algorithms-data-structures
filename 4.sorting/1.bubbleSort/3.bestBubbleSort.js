// With Bubble Sort, if there's no swaps during an iteration round,
// We're guaranteed that the array's been already fully sorted

let iteration = 1;

function bestBubbleSort(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		// console.log(`---------- Upper Iteration #${iteration++} ------------`);
		let noSwaps = true;

		for (let j = 0; j < i; j++) {
			// console.log(arr);

			if (arr[j] > arr[j + 1]) {
				noSwaps = false;
				// console.log(`Swap ${arr[j]} with ${arr[j + 1]}!`);
				[arr[j], arr[j + 1]] = swap([arr[j], arr[j + 1]]);
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

function swap([v1, v2]) {
	return [v2, v1];
}
console.log(bestBubbleSort([43, 4, 5, 23, 7, 6]));
