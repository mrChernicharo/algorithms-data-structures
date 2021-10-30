const removeDuplicatesWithLogs = (nums = []) => {
	console.log({ nums });

	for (let i = 0; i < nums.length; i++) {
		const j = nums.lastIndexOf(nums[i]);
		console.log({
			nums,
			value: nums[i],
			spliceIndex: i,
			deleteCount: j - i,
		});
		nums.splice(i, j - i);
	}
	console.log({ nums });
	return nums.length;
};

const removeDuplicates = (nums = []) => {
	for (let i = 0; i < nums.length; i++) {
		nums.splice(i, nums.lastIndexOf(nums[i]) - i);
	}

	return nums;
};

// console.log(removeDuplicates([1, 1, 2]));
// console.log(
// 	removeDuplicatesWithLogs([1, 1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 6, 6])
// );
console.log(removeDuplicates([1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 6, 6]));
// console.log(removeDuplicates2([1, 1, 2, 2, 2, 3]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
