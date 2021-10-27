// find two elements in an array whose sum equals to the input target
// return the indexes of these two elements
// in case there aren't two elements whose sum equals the target, return null
// you're not allowed to use the same element twice e.g [2,2]

function naiveTwoSum(arr = [], target = 0) {
	// time complexity On^2
	for (let i = 0; i < arr.length; i++) {
		const difference = target - arr[i];

		for (let j = 0; j < arr.length; j++) {
			if (i === j) continue;

			if (arr[j] === difference) {
				return [i, j];
			}
		}
	}

	return null;
}

function twoSum(arr, target) {
	// time complexity On
	const hashMap = new Map();

	for (let i = 0; i < arr.length; i++) {
		hashMap.set(arr[i], i);
		// [[arrayValue, index], [arrayValue, index]]
	}
	for (let i = 0; i < arr.length; i++) {
		const difference = target - arr[i];

		if (hashMap.has(difference)) {
			if (hashMap.get(difference) === i) continue;

			return [i, hashMap.get(difference)];
		}
	}
	return null;
}

// console.log(naiveTwoSum([10, 8, 2, 19, 11, 12], 20)); // => [1, 5]
// console.log(twoSum([10, 8, 2, 19, 11, 12], 20)); // => [1, 5]
// console.log(naiveTwoSum([9, 2, 15, 7, 5], 14)); // => [0, 4]
console.log(twoSum([9, 2, 15, 7, 5], 14)); // => [0, 4]
// console.log(naiveTwoSum([9, 2, -1, 11], 10)); // => [2, 3]
// console.log(twoSum([9, 2, -1, 11], 10)); // => [2, 3]
// console.log(naiveTwoSum([9, 2, -1, 11], 30)); // => null
// console.log(twoSum([9, 2, -1, 11], 30)); // => null
