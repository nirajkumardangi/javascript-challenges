// Challenge 10: Count Occurrences of an Element
// Task: Write a function countOccurrences that counts how many times an element occurs in an array.

// SOLUTION

function countOccurrences(arr, value) {
  let count = 0;
  arr.map((item) => {
    if (item === value) {
     count++;
    }
  });
  return count;
}

console.log(countOccurrences([1, 2, 2, 4, 4, 4, 3], 4));

// OUTPUT: 3
