function isValidSudoku(board) {
	const start = Date.now();
	const rows = Array(9)
		.fill([])
		.map(row => []);

	const cols = Array(9)
		.fill([])
		.map(col => []);

	const squares = Array(9)
		.fill([])
		.map(square => []);

	// making rows and cols
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			rows[i][j] = board[i][j];
			cols[i][j] = board[j][i];
		}
	}

	// making squares
	let sqIdx = 0;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			let row = j * 3;
			let col = i * 3;
			fillSquare(row, col, sqIdx);

			sqIdx++;
		}
	}

	function fillSquare(row, col, sqIdx) {
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				squares[sqIdx].push(board[col + i][row + j]);
			}
		}
	}

	function checkIsValid(array) {
		const memo = {};

		for (let i = 0; i < array.length; i++) {
			const value = array[i];
			if (value in memo) return false;
			if (value === '.') continue;

			memo[value] = value;
		}

		return true;
	}

	for (let array of [...rows, ...cols, ...squares]) {
		if (!checkIsValid(array)) return false;
	}
	const elapesd = Date.now();
	console.log(elapesd - start);

	return true;
}

const board = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const invalidBoard = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '3', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
// console.log(isValidSudoku(invalidBoard));
