function naiveSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      console.log({ i: arr[i], j: arr[j], sum });

      if (sum === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(naiveSumZero([-7, -6, -3, -1, 0, 2, 3, 4, 8]));

// TimeComplexity => O(n^2)
