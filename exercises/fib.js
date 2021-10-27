function fib(n) {
	if (n === 0) return 0;
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));

function memoizedFib(n, memo = {}) {
	if (n in memo) return memo[n];
	if (n === 0) return 0;
	if (n <= 2) return 1;

	memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
	return memo[n];
}

console.log(memoizedFib(5));
console.log(memoizedFib(6));
console.log(memoizedFib(7));
console.log(memoizedFib(50));
console.log(memoizedFib(140));
