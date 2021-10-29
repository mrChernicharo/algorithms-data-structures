// UNDERSTANDING THE UNDERLYING ARRAY MANIPULATIONS

const word = 'abc';
const suffixWays = [
	['xy', 'z'],
	['x', 'yz'],
];

suffixWays.forEach((way, i) => console.log(i, ':', way));

const targetWays = suffixWays.map(way => [word, ...way]);

console.log(targetWays);
console.log('---------------------------------------------');

// ******************************************************************** //

function allConstruct(target, wordBank) {
	if (target === '') return [[]];

	const result = [];
	for (let word of wordBank) {
		const isPrefix = target.indexOf(word) === 0;

		if (isPrefix) {
			const suffix = target.slice(word.length);

			const suffixWays = allConstruct(suffix, wordBank);

			const targetWays = suffixWays.map(way => [word, ...way]);

			result.push(...targetWays);

			// targetWays.forEach(way => {  // samething as above
			// 	result.push([...way]);
			// });
		}
	}

	return result;
}

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // [['abc', 'def']]
console.log(allConstruct('purple', ['pur', 'p', 'le', 'ur', 'purp'])); //[ [ 'pur', 'p', 'le' ], [ 'p', 'ur', 'p', 'le' ], [ 'purp', 'le' ] ]
console.log(allConstruct('', ['car', 'fish', 'ball'])); // [[]]
console.log(allConstruct('orange', ['pur', 'p', 'le', 'ur', 'purp'])); // []
// console.log(
// 	allConstruct(
// 		'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
// 		['eeee', 'eee', 'ee', 'e', 'eeeeee']
// 	)
// ); // 0

// ******************************************************************** //

function memoAllConstruct(target, wordBank, memo = {}) {
	if (target in memo) return [...target];
	if (target === '') return [[]];

	const result = [];

	for (let word of wordBank) {
		const isPrefix = target.indexOf(word) === 0;

		if (isPrefix) {
			const suffix = target.slice(word.length);

			const suffixWays = memoAllConstruct(suffix, wordBank);

			const targetWays = suffixWays.map(way => [word, ...way]);

			targetWays.forEach(way => {
				result.push([...way]);
			});
		}
	}

	memo[target] = result;
	return result;
}

console.log(memoAllConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // [['abc', 'def']]
console.log(memoAllConstruct('purple', ['pur', 'p', 'le', 'ur', 'purp'])); //[ [ 'pur', 'p', 'le' ], [ 'p', 'ur', 'p', 'le' ], [ 'purp', 'le' ] ]
console.log(memoAllConstruct('', ['car', 'fish', 'ball'])); // [[]]
console.log(memoAllConstruct('orange', ['pur', 'p', 'le', 'ur', 'purp'])); // []
console.log(
	memoAllConstruct(
		'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
		['eeee', 'eee', 'ee', 'e', 'eeeeee']
	)
); // []
