function addUpTo(num) {
  return (num * (num + 1)) / 2;
}

function naiveAddUpTo(num) {
  result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}

console.log({ naive: naiveAddUpTo(4), pro: addUpTo(4) });
