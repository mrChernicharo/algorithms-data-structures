function swap(array, leftIndex, rightIndex) {
	let temp = array[leftIndex];
	array[leftIndex] = array[rightIndex];
	array[rightIndex] = temp;
}
function partition(array, left, right) {
	let pivot = array[Math.floor((right + left) / 2)]; //middle element

	while (left <= right) {
		while (array[left] < pivot) {
			left++;
		}
		while (array[right] > pivot) {
			right--;
		}
		if (left <= right) {
			swap(array, left, right); //sawpping two elements
			left++;
			right--;
		}
	}

	return left;
}

function quickSort(array, left = 0, right = array.length - 1) {
	let index;

	if (array.length > 1) {
		index = partition(array, left, right); //index returned from partition
		if (left < index - 1) {
			//more elements on the left side of the pivot
			quickSort(array, left, index - 1);
		}
		if (index < right) {
			//more elements on the right side of the pivot
			quickSort(array, index, right);
		}
	}
	return array;
}

const array = [5, 3, 7, 6, 2, 9];

// first call to quick sort
const sortedArray = quickSort(array);
console.log(sortedArray); //prints [2,3,5,6,7,9]([9, 4, 1, 8, 2, 3]));

console.log(quickSort([43, -23, 11, 21, 78, 1, 34]));
