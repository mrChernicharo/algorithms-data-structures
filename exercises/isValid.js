function isValid(s) {
	let stack = [];
	const mappings = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	for (let i = 0; i < s.length; i++) {
		const symbol = s[i];

		if (symbol in mappings) {
			stack.push(symbol);
		}
		//
		else {
			if (stack.length === 0) return false;

			const popped = stack.pop();
			if (mappings[popped] !== symbol) return false;
		}
	}

	return stack.length === 0;
}

// console.log(isValid('({}[()])')); // true
// console.log(isValid('}{')); // false
// console.log(isValid('[][][]({{}})')); // true
console.log(isValid('[)')); // false
console.log(isValid('[[())]]')); // false
