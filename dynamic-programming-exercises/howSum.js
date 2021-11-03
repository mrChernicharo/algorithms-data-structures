// return any combination that sums up to the target
// Elements might be repeated...daquele jeito
{
	// function howSum(targetSum, numbers) {
	// 	if (targetSum === 0) return [];
	// 	if (targetSum < 0) return null;
	// 	for (let num of numbers) {
	// 		const diff = targetSum - num;
	// 		const resultArr = howSum(diff, numbers);
	// 		if (resultArr !== null) return [...resultArr, num];
	// 	}
	// 	return null;
	// }
}
function memoizedHowSum(targetSum, numbers, memo = {}) {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	for (let num of numbers) {
		const diff = targetSum - num;
		const resultArr = memoizedHowSum(diff, numbers, memo);
		memo[targetSum] = resultArr;

		if (resultArr !== null) {
			return [...memo[targetSum], num];
		}
	}

	return null;
}

function howSum(targetSum, numbers) {
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	for (let num of numbers) {
		const diff = targetSum - num;

		const resultsArr = howSum(diff, numbers);

		if (resultsArr !== null) {
			return [...resultsArr, num];
		}
	}

	return null;
}

// console.log(howSum(8, [2, 3, 4, 5]));
// console.log(howSum(8, [1, 2, 3, 4, 5]));
console.log(howSum(8, [3, 4, 2, 5]));
console.log(howSum(8, [3, 4, 5]));
console.log(howSum(18, [7, 4, 5]));
console.log(howSum(31, [4, 8]));
// console.log(howSum(300, [14, 7])); // <-- huge amount of time!

// console.log(memoizedHowSum(8, [3, 4, 5]));
// console.log(memoizedHowSum(18, [7, 4, 5]));
// console.log(memoizedHowSum(300, [14, 7])); // <-- huge amount of time!

/*

m = targetSum
n = numbers.length

// Brute Force
Time Complexity == O(n^m*n)
Space Complexity == O(m*n)

// Memoized
Time Complexity == O(m^n)
Space Complexity == O(m*n*n)

*/
