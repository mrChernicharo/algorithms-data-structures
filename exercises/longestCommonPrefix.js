function longestCommonPrefix(words) {
	let shortestWordLength = Math.min(...words.map(word => word.length));

	let currLetter = '';
	let response = '';

	for (let i = 0; i < shortestWordLength; i++) {
		for (let w = 0; w < words.length; w++) {
			let word = words[w];
			// console.log(word)

			// if first Word, set currLetter
			if (w === 0) {
				currLetter = word[i];
				if (words.length === 1) return currLetter;
			}
			// else ...
			else if (w !== 0) {
				// if letter not equal currLetter, shut it down
				if (word[i] !== currLetter) {
					return response;
				}

				// if we got to the last word, and currLetter was the same for everyword...
				if (w === words.length - 1) {
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
