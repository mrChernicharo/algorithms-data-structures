function canSum(targetSum, numbers) {
	const table = Array(targetSum + 1).fill(false);

	table[0] = true; // seeding [t][f][f][f][f]...

	for (let i = 0; i <= targetSum + 1; i++) {
		if (!table[i]) continue;

		for (let num of numbers) {
			if (num + i <= targetSum + 1) table[num + i] = true;
		}
	}

	console.log(table.map((val, i) => i + ': ' + val));

	return table[targetSum];
}

console.log(canSum(7, [3, 4, 6])); // true
console.log(canSum(14, [3, 4, 6])); // true
console.log(canSum(13, [5, 6])); // false
console.log(canSum(300, [7, 14])); // false

// length == 8
// [0][1][2][3][4][5][6][7]
