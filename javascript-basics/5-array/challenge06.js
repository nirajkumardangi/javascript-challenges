// Challenge 6: Find Index of an Element
// Task: Write a function findIndex that returns the index of an element in an array, or -1 if it's not found.

// SOLUTION
function findIndex(arr, value) {
  // return arr.indexOf(value);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([10, 20, 30], 20));

// OUTPUT: 1
