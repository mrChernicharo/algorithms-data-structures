/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]

*/

// var moveZeroes = function(nums) {
//     	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] === 0) {
// 			nums.splice(i, 1);
// 			nums.push(0);
// 		}
// 	}
// };

var moveZeroes = function (nums) {
	let zeroCount = 0;
	let i = 0;
	let len = nums.length;

	while (i < len) {
		if (nums[i] === 0) {
			nums.splice(i, 1);

			zeroCount++;
			continue;
		}

		i++;
	}

	while (zeroCount > 0) {
		nums.push(0);

		zeroCount--;
	}

	console.log(nums);
};

// moveZeroes([0]);
moveZeroes([0, 0, 1]);
moveZeroes([0, 1, 0, 3, 12]);
