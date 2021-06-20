// input is a sorted array of numbers
// if there's a combination of values whose sum equals to zero, return these two values

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    let sum = arr[left] + arr[right];
    // console.log({ left: arr[left], right: arr[right], sum });

    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
}

console.log(sumZero([-5, -3, -1, 0, 2, 3, 4])); // [-3, 3]

// TimeComplexity => O(n)
