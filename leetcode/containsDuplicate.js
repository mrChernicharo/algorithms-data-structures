/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/
var containsDuplicate = function (nums) {
	const memo = {};
	let result = false;

	for (let i = 0; i < nums.length; i++) {
		if (memo[nums[i]] === undefined) {
			memo[nums[i]] = 1;
		} else {
			memo[nums[i]] += 1;
			result = true;
		}
	}

	console.log(result);
	return result;
};

// const containsDuplicate = nums => {
// 	const set = new Set(nums);

// 	const res = nums.length > set.size;

// 	console.log(res);
// 	return res;
// };

containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
containsDuplicate([1, 2, 3, 4]);
