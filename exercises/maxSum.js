function maxSubarraySum(arr, num) {
	if (!num || num > arr.length) return null;
	let maxSum = 0;
	let tempSum = 0;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	// console.log({ maxSum, tempSum });
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}

// console.log(sumElements([1, 2, 3, 4]));

// console.log(maxSubarraySum([100, -200, 800, -20, -100], 3));
console.log(maxSubarraySum([100, 200, 0, -10, 400], 3));
// console.log(maxSubarraySum([100, 20, 30, -10, 200, 30, -20, 120, 50, 40], 4));
