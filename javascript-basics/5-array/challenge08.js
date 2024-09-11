// Challenge 9: Flatten a Nested Array
// Task: Write a function flattenArray that flattens a nested array into a single array

// SOLUTION

function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4], 5]]));

// OUTPUT: [ 1, 2, 3, 4, 5 ]
