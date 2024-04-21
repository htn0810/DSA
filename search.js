// Given a sorted array of integers, write a function called search, that
// accepts a value and returns the index where the value passed to the
// function is located. If the value is not found, return -1.
// Search([1 ,2 , 3, 4 ,5 ,6], 4) --> return 3
// Search([1 ,2 , 3, 4 ,5 ,6], 6) --> return 5
// Search([1 ,2 , 3, 4 ,5 ,6], 11) --> return -1

// O(n)
const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

// log(n)
const binarySearch = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (arr[middle] < num) {
      min = middle + 1;
    } else if (arr[middle] > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
