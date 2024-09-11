// Challenge 11: Find the Second Largest Number in an Array
// Task: Write a function findSecondLargest that returns the second-largest number in an array.

// SOLUTION

function findSecondLargest(arr) {
  const sortByDescendingOrder = arr.sort((a, b) => b -a);
  return sortByDescendingOrder[1];
}

console.log(findSecondLargest([1, 2, 3, 4, 5]));

// OUTPUT: 4
