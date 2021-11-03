function bestSum(targetSum, numbers) {
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let shortestCombination = null;

	for (let num of numbers) {
		const rest = targetSum - num;
		const combination = bestSum(rest, numbers);

		if (combination !== null) {
			const result = [...combination, num];
			//prettier-ignore
			if (shortestCombination === null || combination.length < shortestCombination.length) {
					shortestCombination = [...combination, num];
				}
		}
	}
	return shortestCombination;
}

function bestSum2(targetSum, numbers) {
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let bestResult = [];

	for (let num of numbers) {
		const diff = targetSum - num;

		const resultsArr = bestSum(diff, numbers);

		// prettier-ignore
		if (resultsArr !== null) {
			
			if (resultsArr.length < bestResult.length || bestResult.length === 0) {
				bestResult = [...resultsArr, num];
			}
		}
	}

	return bestResult;
}

console.log(bestSum(7, [2, 3, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [2, 5]));
console.log(bestSum(50, [2, 5, 25]));
// console.log(bestSum(90, [2, 5, 25]));

function memoizedBestSum(targetSum, numbers, memo = {}) {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let shortestCombination = null;

	for (let num of numbers) {
		const rest = targetSum - num;

		const remainderCombination = memoizedBestSum(rest, numbers, memo);

		if (remainderCombination !== null) {
			const combination = remainderCombination.concat(num);

			//prettier-ignore
			if (shortestCombination === null || combination.length < shortestCombination.length) {
				shortestCombination = combination
			}
		}
	}

	// console.log(memo);
	memo[targetSum] = shortestCombination;
	return shortestCombination;
}

// console.log(memoizedBestSum(7, [2, 3, 7]));
// console.log(memoizedBestSum(8, [2, 3, 5]));
// console.log(memoizedBestSum(8, [2, 5]));
// console.log(memoizedBestSum(50, [2, 5, 25]));
// console.log(memoizedBestSum(80, [2, 5, 20]));
// console.log(memoizedBestSum(90, [2, 5, 25]));
console.log(memoizedBestSum(200, [1, 2, 5, 24]));
