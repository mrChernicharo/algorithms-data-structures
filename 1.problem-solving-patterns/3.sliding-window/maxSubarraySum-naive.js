// Write a function called maxSubarraySum, which accepts an array of integers and a number
// The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
	if (num > arr.length) return null;

	let max = -Infinity; // better than zero 'cause there might be negative values

	for (let i = 0; i < arr.length - num + 1; i++) {
		let temp = 0;

		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		// console.log(temp);

		if (temp > max) max = temp;
		// max = Math.max(temp, max);
	}

	return max;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3)); //15
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
