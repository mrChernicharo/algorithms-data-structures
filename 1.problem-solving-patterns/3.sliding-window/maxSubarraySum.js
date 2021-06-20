// ao invés de loopar o subarray dentro do array maior pra computar a soma
// aqui a gente simplesmente acha o valor do primeiro conjunto
// e loopamos o array inteiro uma única vez à partir do index num
// a cada iteração, subtraímos o valor do elemento à esquerda, e somamos o da direita
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let maxSum = -Infinity; // better than zero 'cause there might be negative values
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  console.log(tempSum);

  for (let i = num; i < arr.length; i++) {
    iteration = i - num;

    tempSum = tempSum - arr[iteration] + arr[i]; // - arr[0] + arr[3] | - arr[1] + arr[4] | - arr[2] + arr[5] ...
    maxSum = Math.max(tempSum, maxSum);

    console.log({ iteration, maxSum, tempSum });
  }

  return maxSum;
}

// console.log(maxSumSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3)); //15
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(
  maxSubarraySum(
    [10, 2, 5, 12, 8, 1, 15, 7, 3, 16, 4, 2, 13, 14, 3, 5, 2, 8, 11],
    3
  )
);
