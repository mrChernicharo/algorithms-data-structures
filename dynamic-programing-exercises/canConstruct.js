/*
    Is it possible to construct the target word using only strings from the wordBank?
    strings can be repeatedly used as many times as necessary
*/

function canConstruct(target, wordBank) {
	// console.log(target);
	if (target === '') return true;

	for (let word of wordBank) {
		const isPrefix = target.indexOf(word) === 0;

		if (isPrefix) {
			const suffix = target.slice(word.length);

			if (canConstruct(suffix, wordBank)) {
				return true;
			}
		}
	}

	return false;
}

console.log(canConstruct('a', ['a', 'b']));
console.log(canConstruct('abcdef', ['abc', 'ab', 'cd', 'de', 'ef'])); // true
console.log(canConstruct('mariana', ['ari', 'na', 'ma', 'ri', 'm', 'a'])); // true
console.log(canConstruct('felipe', ['fel', 'f', 'elip', 'ip', 'pe'])); // false
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeef', ['eeeee', 'eeee', 'eee','ee','e']))  // false <-- Time problems here!

// ************************************************************************************************************************************
// prettier-ignore
console.log('************************************************************************************************************************')
// ************************************************************************************************************************************

function betterCanConstruct(target, wordBank, memo = {}) {
	if (target in memo) return memo[target];
	if (target === '') return true;

	for (let word of wordBank) {
		const isPrefix = target.indexOf(word) === 0;

		if (isPrefix) {
			const suffix = target.slice(word.length);

			if (betterCanConstruct(suffix, wordBank, memo)) {
				memo[target] = true;
				return memo[target];
			}
		}
	}
	memo[target] = false;
	return false;
}

console.log(betterCanConstruct('a', ['a', 'b']));
console.log(betterCanConstruct('abcdef', ['abc', 'ab', 'cd', 'de', 'ef'])); // true
console.log(betterCanConstruct('mariana', ['ari', 'na', 'ma', 'ri', 'm', 'a'])); // true
console.log(betterCanConstruct('felipe', ['fel', 'f', 'elip', 'ip', 'pe'])); // false
console.log(
	betterCanConstruct(
		'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
		['eeeee', 'eeee', 'eee', 'ee', 'e']
	)
); // false
console.log(
	betterCanConstruct(
		'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
		['eeeeeee', 'eeeeee', 'eeeee', 'eeee', 'eee', 'ee', 'e']
	)
); // false

// const name = 'mariana';
// const prefix = 'mari';
// const prefixIdx = name.indexOf(prefix);
// const sliceAt = prefix.length;
// const suffix = name.slice(sliceAt);

// console.log({ name, prefix, prefixIdx, sliceAt, suffix });
