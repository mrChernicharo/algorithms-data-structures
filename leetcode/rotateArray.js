// var rotate = function (nums, k) {
// 	while (k > 0) {
// 		const popped = nums.pop();
// 		nums.unshift(popped);
// 		k--;
// 	}

// 	console.log(nums);
// };

// var rotate = function (nums, k) {
// 	const popped = [];

// 	while (k > 0) {
// 		popped.push(nums.pop());
// 		k--;
// 	}

// 	let left = 0;
// 	let right = popped.length - 1;

// 	while (left < right) {
// 		let temp = popped[left];
// 		popped[left] = popped[right];
// 		popped[right] = temp;

// 		left++;
// 		right--;
// 	}

// 	nums = popped.concat(nums);

// 	console.log(nums);
// };

// var rotate = function (nums, k) {
// 	while (k > 0) {
// 		nums.unshift(nums.pop());
// 		k--;
// 	}
// 	console.log(nums);
// };

var rotate = function (nums, k) {
	const copied = [...nums];

	let rotation = k % nums.length;
	console.log({ rotation });

	for (let i = 0; i < nums.length; i++) {
		let mappedIndex;

		if (i + 1 <= rotation) {
			mappedIndex = nums.length - rotation + i;
		} else {
			mappedIndex = i - rotation;
		}

		console.log({ i, nums, mappedIndex, mappedValue: copied[mappedIndex] });
		nums[i] = copied[mappedIndex];
	}
	console.log({ nums });
};

// rotate([1, 2, 3, 4, 5, 6, 7], 2);
// rotate([1, 2, 3, 4, 5, 6, 7], 1);
// rotate([1, 2, 3, 4, 5, 6, 7], 4);
rotate([1, 2, 3, 4], 10);
