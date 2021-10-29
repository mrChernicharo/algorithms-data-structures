// function bubbleSort(array) {
// 	for (let i = array.length - 1; i >= 0; i--) {
// 		for (let j = 0; j < array.length; j++) {
// 			if (array[j] > array[j + 1]) {
// 				[array[j], array[j + 1]] = [array[j + 1], array[j]];
// 			}
// 		}
// 	}

// 	return array;
// }

function bubbleSort(array) {
	for (let i = array.length - 1; i >= 0; i--) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}

	return array;
}

console.log(bubbleSort([21, 32, 6, 4, -3, 14, 21, -1, 10]));
