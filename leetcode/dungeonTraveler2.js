const calculateMinimumHP = dungeon => {
	const m = dungeon.length;
	const n = dungeon[0].length;
	let row = new Array(n).fill(1);

	for (let i = m - 1; i >= 0; i--) {
		let newRow = new Array(n).fill(1);

		for (let j = n - 1; j >= 0; j--) {
			const cell = dungeon[i][j];
			const goRight =
				j <= n - 2
					? Math.max(newRow[j + 1] - cell, 1)
					: Number.MAX_VALUE;
			const goDown =
				i <= m - 2 ? Math.max(row[j] - cell, 1) : Number.MAX_VALUE;

			if (goRight === Number.MAX_VALUE && goDown === Number.MAX_VALUE) {
				newRow[j] = Math.max(1 - cell, 1);
			} else {
				newRow[j] = Math.min(goRight, goDown);
			}
		}

		row = newRow;
	}

	console.log(row[0]);
	return row[0];
};

var calculateMinimumHP2 = function (dungeon) {
	var nrows = dungeon.length;
	var ncols = dungeon[0].length;

	var dp = [];

	for (var r = 0; r < nrows + 1; r++) {
		dp[r] = [];

		for (var c = 0; c < ncols + 1; c++) {
			dp[r][c] = Number.MAX_SAFE_INTEGER;
		}
	}
	dp[nrows - 1][ncols] = dp[nrows][ncols - 1] = 1;

	for (var r = nrows - 1; r >= 0; r--) {
		for (var c = ncols - 1; c >= 0; c--) {
			dp[r][c] = Math.max(
				1,
				Math.min(dp[r + 1][c], dp[r][c + 1]) - dungeon[r][c]
			);

			console.log({ r, c, dp });
		}
	}

	console.log(dp[0][0]);
	return dp[0][0];
};

calculateMinimumHP2([
	[-2, -3, 3],
	[-5, -10, 1],
	[10, 30, -5],
]); // 7
// calculateMinimumHP2([[0]]); // 1
// calculateMinimumHP2([[100]]); // 1
// calculateMinimumHP([[0, 0]]); // 1
// calculateMinimumHP([[-3, 5]]); // 1
// calculateMinimumHP([
// 	[-2, -3],
// 	[-5, -10],
// 	[10, 30],
// ]); // 16
// calculateMinimumHP([
// 	[1, -3, 3],
// 	[0, -2, 0],
// 	[-3, -3, -3],
// ]);
