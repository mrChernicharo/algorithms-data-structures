// var maxArea = function (height) {
// 	let maxArea = 0;

// 	for (let i = 0; i < height.length; i++) {
// 		for (let j = i + 1; j < height.length; j++) {
// 			// calculate area
// 			const poolLenght = j - i;
// 			const waterHeight = Math.min(height[i], height[j]);

// 			const area = waterHeight * poolLenght;
// 			maxArea = Math.max(area, maxArea);
// 		}
// 	}

// 	console.log(maxArea);
// 	return maxArea;
// };

// var maxArea = function (height) {
// 	const memo = {};
// 	let maxArea = 0;

// 	for (let i = 0; i < height.length; i++) {
// 		for (let j = i + 1; j < height.length; j++) {
// 			if (height[i] + ':' + height[j] in memo) continue;

// 			// calculate area
// 			const poolLenght = j - i;
// 			const waterHeight = Math.min(height[i], height[j]);

// 			const area = waterHeight * poolLenght;
// 			memo[height[i] + ':' + height[j]] = area;
// 			memo[height[j] + ':' + height[i]] = area;

// 			maxArea = Math.max(area, maxArea);
// 		}
// 	}

// 	console.log(maxArea);
// 	return maxArea;
// };

var maxArea = function (height) {
	let maxArea = 0;

	let left = 0;
	let right = height.length - 1;

	while (left < right) {
		const distance = right - left;
		const poolHeight = Math.min(height[left], height[right]);
		const area = distance * poolHeight;

		if (area > maxArea) {
			maxArea = area;
		}

		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}

	console.log(maxArea);
	return maxArea;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
maxArea([4, 1, 2, 3, 4]); // 16
maxArea([1, 2, 1]); // 2
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
maxArea([1, 0, 0, 0, 0, 0, 0, 2, 2]); // 8
