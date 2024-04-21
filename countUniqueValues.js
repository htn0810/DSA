// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in
// the array, but it will always be sorted.
// Ex: countUniqueValues([1, 1, 1, 1, 1, 2]) --> return 2
// Ex: countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) --> return 7
// Ex: countUniqueValues([]) --> return 0
// Ex: countUniqueValues([-2, -1, -1, 0, 1]) --> return 4

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = left + 1;
  let counter = 0;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left = right;
      counter++;
    }
    right++;
  }
  counter++;
  return counter;
};

const countUniqueValues2 = (arr) => {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = left + 1;
  for (; right < arr.length; right++) {
    if (arr[left] !== arr[right] && arr[left] < arr[right]) {
      arr[left + 1] = arr[right];
      left++;
    }
  }
  return left + 1;
};

console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-2, -1, -1, 0, 1]));
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 12]));
console.log(countUniqueValues2([1, 1, 1, 1, 1, 2]));
