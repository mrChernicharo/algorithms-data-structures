/*
given a targetSum and an array with positive values (or zero)
return true/false if the targetSum is achievable by the sum
of any combination of the array's values

same value might be used. Ex:
    target: 8, arr: [2,7] => true

since we need to get values that sum up to the targetSum, we'll look for the remainder
that is, targetSum - num

*/

// Time Complexity O(n^n+m)
// Space Complexity O(n+m)
function canSum(targetSum, numbers) {
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;

	for (let num of numbers) {
		const remainder = targetSum - num;

		if (canSum(remainder, numbers) === true) {
			return true;
		}
	}

	return false;
}

// Time Complexity O(n+m)
// Space Complexity O(n+m)
function betterCanSum(targetSum, numbers, memo = {}) {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;

	for (let num of numbers) {
		const remainder = targetSum - num;
		memo[targetSum] = betterCanSum(remainder, numbers, memo);

		if (memo[targetSum] === true) {
			return true;
		}
	}

	return false;
}

console.log(canSum(9, [4, 3, 6]));
console.log(canSum(11, [7, 6]));
console.log(canSum(200, [4, 3, 6]));
console.log(canSum(300, [7, 14])); // <-- takes too long

console.log('+++++++++++++++++++++++=');

console.log(betterCanSum(9, [4, 3, 6]));
console.log(betterCanSum(11, [7, 6]));
console.log(betterCanSum(200, [4, 3, 6]));
console.log(betterCanSum(300, [7, 14]));
