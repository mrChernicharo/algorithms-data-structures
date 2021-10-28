function longestCommonPrefix(strs) {
	let shortestWordLength = Math.min(...strs.map(str => str.length));

	let currLetter = '';
	let response = '';

	for (let i = 0; i < shortestWordLength; i++) {
		for (let ch = 0; ch < strs.length; ch++) {
			let word = strs[ch];
			// console.log(word)

			// if first Word, set currLetter
			if (ch === 0) {
				currLetter = word[i];
				if (strs.length === 1) return currLetter;
			}
			// else ...
			else if (ch !== 0) {
				// if letter not equal currLetter, shut it down
				if (word[i] !== currLetter) {
					return response;
				}

				// if we got to the last word, and currLetter was the same for everyword...
				if (ch === strs.length - 1) {
					// add letter to response and keep going!
					response += currLetter;
				}
			}
		}
	}

	return response;
}

console.log(longestCommonPrefix(['a'])); // "a"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log(longestCommonPrefix(['cir', 'car'])); // "c"
console.log(longestCommonPrefix(['barrabas', 'barril', 'barra', 'barro'])); // "barr"
