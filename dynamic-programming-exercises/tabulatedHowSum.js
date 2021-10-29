function howSum(targetSum, numbers) {
	const table = Array(targetSum + 1).fill(null);
	table[0] = [];

	for (let i = 0; i < targetSum + 1; i++) {
		if (table[i] !== null) {
			for (let num of numbers) {
				table[num + i] = [...table[i], num];

				// optional statement ...
				if (preventTableOverflow(table, num, i, targetSum))
					return table[targetSum];
			}
		}
		// console.log(table);
	}

	return table[targetSum];
}

const preventTableOverflow = (table, num, i, targetSum) =>
	[...table[num + i]].reduce((a, b) => a + b) > targetSum
		? table[targetSum]
		: null;

console.log(howSum(9, [3, 4, 6]));
console.log(howSum(17, [3, 4, 6]));
// console.log(howSum(300, [14, 7]));
