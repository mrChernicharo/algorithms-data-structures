/* 

there's a m X n grid. 
[][][]
[][][]
the traveller starts always at the top left and it's goal is to get to the end of the grid at the bottom right corner.
Traveller is only allowed to move down and right
Your function must return how many different ways are there for the traveller to achieve its goal

in a 2 X 3 grid there are 3 different ways, similarly as a 3 X 2 one
in a 2 X 2 grid there are 2 ways
in a 1 X 2 or 2 X 1 threre's only 1 way to go through start to end: YOU DO NOTHING!
in a 1 X 1 there will be zero ways, the traveler's already there!
and of course, in a 0 X 1 or 1 X 0, there's no grid to go through, so, zero ways
The same is true if we got 0 X 2 or 0 X 3 etc.

Whenever you move in one direction, we're actually subracting 1 from one of the two dimensions of the grid
...and this points out there are repeated subproblems inside a bigger problemp5.BandPass()

Thinking about our function, we will have a base case:
    if m OR n equals zero
    if m equals 1 AND n equals 1

*/

// Naive
// Time Complexity O2^m+n
// Space Complexity Om+n
function gridTraveler(m, n) {
	if (m === 0 || n === 0) return 0;
	if (m === 1 && n === 1) return 1;

	return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(10, 6)); // 2002

// Better memoized version
// Time Complexity On+m
// Space Complexity Om+n
function memoizedGridTraveler(m, n, memo = {}) {
	const key = m + ',' + n;
	if (key in memo) return memo[key];

	if (m === 0 || n === 0) return 0;
	if (m === 1 && n === 1) return 1;

	memo[key] =
		memoizedGridTraveler(m - 1, n, memo) +
		memoizedGridTraveler(m, n - 1, memo);

	return memo[key];
}

console.log(memoizedGridTraveler(3, 3)); // 6
console.log(memoizedGridTraveler(10, 6)); // 2002
console.log(memoizedGridTraveler(18, 18)); // 2333606220
console.log(memoizedGridTraveler(24, 30)); // 352870329957600

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

Memoization Recipe: 
    1. make it work
        - visualize the problem as a tree
        - implement the tree using recursion [leaves are the base case]
        - test it [it's ok if it's slow]

    2. make it efficient
        - add a memo object [the obj must be shared between function calls]
        - add a base case to return memo values
        - store return values into the memo

*/
