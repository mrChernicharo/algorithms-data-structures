// m == target.length
// n == wordBank.length

// Time complexity O(n^n*m)
// Space complexity O(m^2)

function countConstruct(target, wordBank) {
	if (target === '') return 1;

	let totalWays = 0;

	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			const ways = countConstruct(suffix, wordBank);

			totalWays += ways;
		}
	}

	return totalWays;
}

// m == target.length
// n == wordBank.length

// Time complexity O(n*m^2)
// Space complexity O(m^2)

function memoizedCountConstruct(target, wordBank, memo = {}) {
	if (target in memo) return memo[target];
	if (target === '') return 1;

	let totalCount = 0;

	for (let word of wordBank) {
		const isPrefix = target.indexOf(word) === 0;
		if (isPrefix) {
			const suffix = target.slice(word.length);

			const waysCount = memoizedCountConstruct(suffix, wordBank, memo);
			totalCount += waysCount;
		}
	}

	memo[target] = totalCount;
	return totalCount;
}

console.log(
	memoizedCountConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
); // 1
console.log(memoizedCountConstruct('purple', ['pur', 'p', 'le', 'ur', 'purp'])); // 3
console.log(memoizedCountConstruct('', ['pur', 'p', 'le', 'ur', 'purp'])); // 1
console.log(memoizedCountConstruct('orange', ['pur', 'p', 'le', 'ur', 'purp'])); // 0
console.log(
	memoizedCountConstruct(
		'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
		['eeee', 'eee', 'ee', 'e', 'eeeeee']
	)
); // 0
