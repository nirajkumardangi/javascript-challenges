// Challenge 14: Merge Two Sorted Arrays
// Task: Write a function mergeSortedArrays that merges two sorted arrays into one sorted array.

// SOLUTION

function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// OUTPUT: [ 1, 2, 3, 4, 5, 6 ]
