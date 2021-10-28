function fib(n) {
	// prettier-ignore
	const table = Array(n + 1).fill().map(() => 0);

	table[1] = 1; // seeding [0,1,0,0,0 ...]

	for (let i = 0; i < n + 1; i++) {
		table[i + 1] += table[i];
		table[i + 2] += table[i];
	}

	return table[n];
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));
console.log(fib(100));
