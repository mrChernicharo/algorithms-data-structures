var longestPalindrome = function (s) {
	let longestPal = '';

	const isPalindrome = str => {
		let left = 0;
		let right = str.length - 1;

		while (left < right) {
			if (str[left] !== str[right]) return false;
			left++;
			right--;
		}
		return true;
	};

	let sliceFactor = 1;
	while (sliceFactor <= s.length) {
		for (let i = 0; i < s.length - sliceFactor + 1; i++) {
			const str = s.slice(i, sliceFactor + i);

			if (isPalindrome(str)) {
				if (str.length > longestPal.length) {
					longestPal = str;
				}
			}
		}

		sliceFactor++;
	}

	console.log('RESPONSE', longestPal);
	return longestPal;
};

longestPalindrome('hannah');
longestPalindrome('abhannah');
longestPalindrome('banana');
