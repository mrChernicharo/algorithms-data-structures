const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];

		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] === diff) {
				return [i, j];
			}
		}
	}
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
