function naiveFib(n) {
  if (n <= 2) return 1;
  return naiveFib(n - 1) + naiveFib(n - 2);
}

function fib(n, memo = [undefined, 1, 1]) {
  if (memo[n] != undefined) return memo[n];
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

function bottomUpFib(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
}

// const res =  fib(memo[n - 1]) + fib(memo[n - 2])

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
console.log(fib(42));

console.log("====================================");

console.log(naiveFib(1));
console.log(naiveFib(2));
console.log(naiveFib(3));
console.log(naiveFib(4));
console.log(naiveFib(5));
console.log(naiveFib(6));
console.log(naiveFib(7));
console.log(naiveFib(8));
console.log(naiveFib(9));
console.log(naiveFib(10));
console.log(naiveFib(42));

console.log("====================================");

console.log(bottomUpFib(1));
console.log(bottomUpFib(2));
console.log(bottomUpFib(3));
console.log(bottomUpFib(4));
console.log(bottomUpFib(5));
console.log(bottomUpFib(6));
console.log(bottomUpFib(7));
console.log(bottomUpFib(8));
console.log(bottomUpFib(9));
console.log(bottomUpFib(10));
console.log(bottomUpFib(42));
