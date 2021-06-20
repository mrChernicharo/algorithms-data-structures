function iterativeFactorial(num) {
  let res = 1;
  for (let i = num; i > 1; i--) {
    res *= i;
  }
  return res;
}

console.log(iterativeFactorial(5));
console.log(iterativeFactorial(3));
