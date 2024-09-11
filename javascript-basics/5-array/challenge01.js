// Challenge 1: Find the Largest Number in an Array.
// Task: Write a function findLargest that returns the largest number in a given array.

// SOLUTION
function findLargest(arr) {
  // return Math.max(...arr);

  let i;
  let max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findLargest([1, 2, 3, 4, 5, 16, 0, 90]));

// OUTPUT: 90
