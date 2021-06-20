function naiveStringSearch(long, short) {
  let count = 0;
  let matchIndexes = [];

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(i, j, long[i + j], short[j]);
      if (short[j] !== long[i + j]) {
        console.log("BREAK");
        break;
      }
      if (j === short.length - 1) {
        console.log("FOUND MATCH!");
        matchIndexes.push(i);
        count++;
      }
    }
  }
  return `found ${count} matches! ${
    matchIndexes.length ? "At positions: " + matchIndexes : ""
  }`;
}

// console.log(naiveStringSearch("lovato lobato lob", "lob"));
console.log(naiveStringSearch("potatoes tomatoes rubatto toes", "toes"));
