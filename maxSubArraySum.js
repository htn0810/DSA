// Write a function called maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of n
// consecutive elements in the array.
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) --> return 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) --> return 17
// maxSubarraySum([4, 2, 1, 6], 1) --> return 6
// maxSubarraySum([4, 2, 1, 6, 2], 4) --> return 13
// maxSubarraySum([], 4) --> return null

const maxSubarraySum = (arr, n) => {
  if (n > arr.length) {
    return null;
  }
  let max = 0;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

// Refactor
const maxSubarraySum2 = (arr, n) => {
  if (arr.length < n) return null;
  let max = 0;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  temp = max;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    max = Math.max(temp, max);
  }
  return max;
};

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum2([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum2([4, 2, 1, 6], 1));
