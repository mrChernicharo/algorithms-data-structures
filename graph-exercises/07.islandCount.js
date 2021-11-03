// const world = [
// 	['W', 'L', 'W', 'W', 'L', 'L'],
// 	['W', 'L', 'L', 'W', 'L', 'L'],
// 	['W', 'L', 'W', 'W', 'W', 'W'],
// 	['W', 'W', 'W', 'W', 'W', 'W'],
// 	['L', 'L', 'W', 'W', 'W', 'W'],
// ];

const world = [
	['W', 'L', 'W', 'W', 'L', 'L', 'L'],
	['W', 'L', 'L', 'W', 'L', 'L', 'W'],
	['W', 'W', 'W', 'W', 'W', 'W', 'W'],
	['L', 'W', 'W', 'W', 'W', 'L', 'W'],
	['L', 'L', 'L', 'W', 'W', 'W', 'W'],
	['L', 'L', 'W', 'W', 'L', 'L', 'L'],
];

const islandCount = grid => {
	let count = 0;
	const visited = new Set();

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			if (explore(grid, r, c, visited) === true) {
				count++;
			}
		}
	}

	return count;
};

const explore = (grid, r, c, visited) => {
	const rowInBounds = r >= 0 && r < grid.length;
	const colInBounds = c >= 0 && c < grid[0].length;

	if (!rowInBounds || !colInBounds) return false;

	if (grid[r][c] === 'W') return false;

	const pos = r + ',' + c;
	if (visited.has(pos)) return false;
	visited.add(pos);

	explore(grid, r - 1, c, visited);
	explore(grid, r + 1, c, visited);
	explore(grid, r, c - 1, visited);
	explore(grid, r, c + 1, visited);

	return true;
};

console.log(islandCount(world));
