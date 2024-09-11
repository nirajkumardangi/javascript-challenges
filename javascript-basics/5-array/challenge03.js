// Challenge 3: Reverse an Array
// Task: Write a function reverseArray that returns a new array with the elements reversed.

// SOLUTION

function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

console.log(reverseArray([1, 2, 3]));

// OUTPUT: [3, 2, 1];
