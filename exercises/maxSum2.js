function maxSubarraySumV2(arr = [], num) {
	if (arr.length < num) return null;

	let currentSum = 0;

	let currentSubArray = [];

	for (let i = 0; i < arr.length + 1 - num; i++) {
		currentSubArray = arr.slice(i, num + i);
		const iterationSum = sumElements(currentSubArray);

		// check the sum of the first num elements in the array and store that value
		if (i === 0) {
			currentSum = iterationSum;
		} else {
			// if this value is greater than the one previously stored, then overwrite the storedSum
			if (iterationSum > currentSum) {
				currentSum = iterationSum;
			}
		}

		console.log({ currentSubArray, currentSum });
	}
	return currentSum;
}

function sumElements(arr) {
	return arr.reduce((acc, next) => acc + next);
}

// console.log(maxSubarraySumV2([1, 2, 3, 4, 5, 6, 7], 3)); // 3 iterations
// console.log(maxSubarraySumV2([1, 2, 3, 4, 5, 6], 2)); // 5 iterations
console.log(maxSubarraySumV2([1, 2, 3, 4, 5, 6], 4)); // 3 iterations
