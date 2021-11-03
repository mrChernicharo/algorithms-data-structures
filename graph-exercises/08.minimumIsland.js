// const world = [
// 	['W', 'L', 'W', 'W', 'L', 'L'],
// 	['W', 'L', 'L', 'W', 'L', 'L'],
// 	['W', 'L', 'W', 'W', 'W', 'W'],
// 	['W', 'W', 'W', 'W', 'W', 'W'],
// 	['L', 'L', 'W', 'W', 'W', 'W'],
// ];

const world = [
	['W', 'L', 'L', 'W', 'L', 'L', 'L'],
	['W', 'L', 'L', 'W', 'L', 'L', 'W'],
	['W', 'W', 'W', 'W', 'W', 'W', 'W'],
	['L', 'W', 'W', 'W', 'W', 'L', 'W'],
	['L', 'L', 'L', 'W', 'W', 'L', 'W'],
	['L', 'L', 'W', 'W', 'L', 'L', 'L'],
];

const minimumIsland = grid => {
	let minimum = Infinity;
	const visited = new Set();

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			const size = exploreSize(grid, r, c, visited);

			if (size > 0 && size < minimum) {
				minimum = size;
			}
		}
	}

	return minimum;
};

const exploreSize = (grid, r, c, visited) => {
	const rowInBounds = r >= 0 && r < grid.length;
	const colInBounds = c >= 0 && c < grid[0].length;

	if (!rowInBounds || !colInBounds) return 0;

	if (grid[r][c] === 'W') return 0;

	const pos = r + ',' + c;
	if (visited.has(pos)) return 0;
	visited.add(pos);

	let size = 1;
	size += exploreSize(grid, r - 1, c, visited);
	size += exploreSize(grid, r + 1, c, visited);
	size += exploreSize(grid, r, c - 1, visited);
	size += exploreSize(grid, r, c + 1, visited);

	return size;
};

console.log(minimumIsland(world));
