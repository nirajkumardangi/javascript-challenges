// Challenge 13: Find All Unique Elements
// Task: Write a function findUnique that returns all unique elements in an array.

// SOLUTION
function findUnique(arr) {
  return arr.filter(
    (item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item)
  );
}
console.log(findUnique([1, 2, 2, 3, 4, 4]));

// OUTPUT: [1, 3]
