// How many ways for a traveler to get from point A to point B?

function gridTraveler(rows, cols) {
	const grid = Array(rows + 1)
		.fill()
		.map(() => Array(cols + 1).fill(0));

	grid[1][1] = 1; // seeding 1 at the top left corner (don't forget that there are surrounding zeroes)

	for (let row = 0; row < rows + 1; row++) {
		for (let col = 0; col < cols + 1; col++) {
			const value = grid[row][col];
			// console.log({ row, col, value });

			if (row + 1 <= rows) {
				grid[row + 1][col] += value;
			}
			if (col + 1 <= cols) {
				grid[row][col + 1] += value;
			}
		}
	}

	console.log(grid);
	console.log(
		`there are ${grid[rows][cols]} ways for a traveler to traverse a ${rows} X ${cols} grid.`
	);
	return grid[rows][cols];
}

console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(4, 3));
console.log(gridTraveler(24, 5));
