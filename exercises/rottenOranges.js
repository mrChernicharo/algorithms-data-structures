const orangesRotting = grid => {
	const cols = grid[0].length;
	const rows = grid.length;

	let minutes = 0;
	let nextToRot = [];

	while (minutes === 0 || nextToRot.length) {
		nextToRot = [];
		// console.log({ grid, minutes });
		// console.log('==================');

		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				// rotten
				if (grid[i][j] === 2) {
					// look up 4 directions
					// top
					if (i > 0) {
						if (grid[i - 1][j] === 1)
							nextToRot.push(`${i - 1}:${j}`);
					}
					// right
					if (j + 1 < cols) {
						if (grid[i][j + 1] === 1)
							nextToRot.push(`${i}:${j + 1}`);
					}
					// bottom
					if (i + 1 < rows) {
						if (grid[i + 1][j] === 1)
							nextToRot.push(`${i + 1}:${j}`);
					}
					// left
					if (j > 0) {
						if (grid[i][j - 1] === 1)
							nextToRot.push(`${i}:${j - 1}`);
					}
				}
			}
		}
		console.log(nextToRot);

		nextToRot.forEach(coords => {
			const [i, j] = coords.split(':');

			grid[Number(i)][Number(j)] = 2;
		});
		minutes++;
	}

	return minutes - 1;
};

// console.log(
// 	orangesRotting([
// 		[2, 1, 1],
// 		[0, 0, 1],
// 		[1, 1, 1],
// 	])
// );

// console.log(
// 	orangesRotting([
// 		[2, 1, 1],
// 		[0, 1, 1],
// 		[1, 0, 1],
// 	])
// );

// console.log(
// 	orangesRotting([
// 		[2, 1, 1],
// 		[0, 2, 1],
// 		[1, 0, 1],
// 	])
// );

console.log(
	orangesRotting([
		[2, 0, 1],
		[1, 0, 2],
		[1, 1, 0],
		[1, 1, 0],
	])
);
