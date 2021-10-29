// const sortColors = nums => {
// 	const memo = {};

// 	for (let num of nums) {
// 		if (num in memo) memo[num] += 1;
// 		else memo[num] = 1;
// 	}

// 	const response = [];
// 	Object.keys(memo).forEach(key => {
// 		const repeats = memo[key];

// 		if (repeats) {
// 			for (let i = 0; i < repeats; i++) {
// 				response.push(Number(key));
// 			}
// 		}
// 	});

// 	return response;
// };

// var sortColors = function (nums) {

// };

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));

/*
Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
Example 3:

Input: nums = [0]
Output: [0]
Example 4:

Input: nums = [1]
Output: [1] 
  
*/
