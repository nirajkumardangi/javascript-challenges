// Challenge 2: Sum All Numbers in an Array
// Task: Write a function sumArray that returns the sum of all numbers in a given array.

// SOLUTION

function sumArray(arr) {
  let i;
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// OUTPUT: 15
