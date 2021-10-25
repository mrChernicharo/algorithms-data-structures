// MY SOLUTION
function isAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;

	const obj1 = {};
	const obj2 = {};

	for (let ch of str1) {
		obj1[ch] = (obj1[ch] || 0) + 1;
	}
	for (let ch of str2) {
		obj2[ch] = (obj2[ch] || 0) + 1;
	}

	for (let key in obj1) {
		if (!(key in obj2)) return false;

		if (obj1[key] !== obj2[key]) return false;
	}
	return true;
}

// isAnagram('iracema', 'america');
// isAnagram('thor', 'roth');
// isAnagram('erutan', 'nature');
// isAnagram('a gentleman','elegant man')
isAnagram('ronald reagan', 'adarn longera');

// TimeComplexity => O(n)
