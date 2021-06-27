// countUniqueValues using two pointers

// MY SOLUTION
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let p1 = 0;
  for (let p2 = 1; p2 < arr.length; p2++) {
    let notEqual = arr[p1] !== arr[p2];
    console.log([arr[p1], "<->", arr[p2], "different: " + notEqual]);

    if (notEqual) {
      p1++;
      arr[p1] = arr[p2];
    }
  }
  return p1 + 1;
}

console.log(
  countUniqueValues([-2, -1, 1, 1, 1, 2, 2]) // 4
  // countUniqueValues([-2, -1, 0, 1, 1, 2, 2]) // 5
  // countUniqueValues([-22, -11, 0, 0, 1, 1, 3, 3, 3, 3, 45]) // 6
  // countUniqueValues([1]) // 1
  // countUniqueValues([]) // 0
  // countUniqueValues([1,2,2,2,3,4,4,5,5,5,5,6,7]) // 7
  // countUniqueValues([1, 2, 2, 2, 2, 2, 2, 17, 17, 18, 18, 19]) // 5
);
