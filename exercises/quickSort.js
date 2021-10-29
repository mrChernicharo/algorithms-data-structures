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
