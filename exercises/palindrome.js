function isPalindrome(str = '') {
	// two pointers, each one pointing at an end of the string
	let left = 0;
	let right = str.length - 1;

	while (left <= right) {
		console.log({ left, right });

		// check if characters at both ends are different. If so, break and return false
		if (str[left] !== str[right]) {
			return false;
		}

		left++;
		right--;
	}

	return true;
}

// console.log(isPalindrome('anna')); // true
// isPalindrome('hanah'); // true
console.log(isPalindrome('riot')); // false
// isPalindrome('mirror rorrim'); // true
// console.log(isPalindrome('mirrororrim')); // true
// console.log(isPalindrome('mirror torrim')); // false
// isPalindrome('mariana'); // false
