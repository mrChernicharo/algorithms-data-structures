/*
The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of m x n rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight his way through dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers).

To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

Return the knight's minimum initial health so that he can rescue the princess.

Note that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

*/

// MY BROKEN SOLUTION...
const calculateMinimumHP = dungeon => {
	let currHP = 1;
	let minHP = 1;
	let row = 0;
	let col = 0;
	const dungeonRows = dungeon[0].length;
	const dungeonCols = dungeon.length;

	const gotoNextRoom = (m, n) => {
		// accumulate room value (hp gain or loss)
		currHP -= dungeon[m][n];

		if (currHP > minHP) {
			minHP = currHP;
		}

		// console.log({ row, col, dungeonRows, dungeonCols, currHP });

		let rightRoom = -Infinity;
		let bottomRoom = -Infinity;
		let nextRoom = null;

		// Check what's the value of the next possible rooms, if they exist
		if (m < dungeonCols - 1) {
			rightRoom = dungeon[m + 1][n];
		}
		if (n < dungeonRows - 1) {
			bottomRoom = dungeon[m][n + 1];
		}

		if (rightRoom > -Infinity || bottomRoom > -Infinity) {
			// check what room is better
			nextRoom = Math.max(rightRoom, bottomRoom);

			// console.log({ nextRoom });

			// update matrix pointers
			if (rightRoom > bottomRoom) {
				row++;
			} else {
				col++;
			}

			// recurse
			gotoNextRoom(row, col);
		}
		if (nextRoom === null) {
			// if there's no next room, we reached the end of the dungeon
			return;
		}
	};
	gotoNextRoom(row, col);

	console.log(minHP);
	console.log('-----------------');
	return minHP;
};

//  The initial health of the knight must be at least 7
// if he follows the optimal path: RIGHT-> RIGHT -> DOWN -> DOWN.
calculateMinimumHP([
	[-2, -3, 3],
	[-5, -10, 1],
	[10, 30, -5],
]); // 7
calculateMinimumHP([[0]]); // 1
calculateMinimumHP([[100]]); // 1
calculateMinimumHP([[0, 0]]); // 1
calculateMinimumHP([[-3, 5]]); // 1
calculateMinimumHP([
	[-2, -3],
	[-5, -10],
	[10, 30],
]); // 16
calculateMinimumHP([
	[1, -3, 3],
	[0, -2, 0],
	[-3, -3, -3],
]);

// console.log(1 - -2 - -3 - 3 - 1 - -5);
