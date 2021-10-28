function isValidSudoku(board) {
	const checkRow = row => {
		const memo = {};
		for (let i = 0; i < 8; i++) {}
	};

	const checkCol = col => {
		const memo = {};
		for (let i = 0; i < 8; i++) {}
	};

	const checkSquare = square => {
		const memo = {};
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {}
		}
	};

	// const rows = Array(9).fill([]).map((row, i)=> board[i])
	// let rows = Array(9).fill([])
	// let cols = Array(9).fill([])
	// const squares = Array(9).fill([])

	let rows = [];
	let cols = [];

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			// console.log({i,j, r: board[i][j], c: board[j][i]})
			rows.push(board[i][j]);
			cols.push(board[j][i]);
		}
	}

	console.log({ rows, cols });

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

isValidSudoku(board);
