/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

var singleNumber = function (nums) {
	const memo = {};

	for (let i = 0; i < nums.length; i++) {
		memo[nums[i]] = memo[nums[i]] === undefined ? 1 : memo[nums[i]] + 1;
	}

	for (let key of Object.keys(memo)) {
		if (memo[key] === 1) {
			return Number(key);
		}
	}
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([40, 1, 2, 1, 2]));
