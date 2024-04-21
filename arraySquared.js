// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array
// has it’s corresponding value squared in the second array.
// The frequency of values must be the same.

// an example use nested loop O(N^2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  if (arr1.length === 0) return false;
  for (let i = 0; i < arr1.length; i++) {
    // one loop
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // one loop
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

// use 3 loops but just O(n)
const same2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  if (arr1.length === 0) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
};

console.log(same2([1, 2, 3, 2], [9, 1, 4, 4]));
