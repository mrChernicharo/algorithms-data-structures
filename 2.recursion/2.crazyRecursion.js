let i = 0;
function crazyRecursion(num) {
  i++;
  if (num === 1) return ` result iteration ${i}: ${1}`;
  return ` result of iteration ${i}:${num + crazyRecursion(num - 1)}.`;
}
console.log(crazyRecursion(6));
