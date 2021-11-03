const rotateMatrix = matrix => {
	const side = matrix.length - 1;

	for (
		let x = 0, y = matrix.length - 1;
		x < matrix.length / 2 && y >= 0 && x < y;
		x++, y--
	) {
		for (
			let i = 0, j = matrix.length - 1;
			i < matrix.length / 2 && j >= 0;
			i++, j--
		) {
			// prettier-ignore
			[
				matrix[x][i],
				matrix[i][y],
				matrix[j][x],
				matrix[y][j]
			] = [
				matrix[j][x],
				matrix[x][i],
				matrix[y][j],
				matrix[i][y]
			];
		}
	}
	console.log(matrix);
	return matrix;
};
rotateMatrix([
	[1, 2],
	[3, 4],
]);
rotateMatrix([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]);
rotateMatrix([
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
]);
