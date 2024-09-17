// Challenge 15: Chunk an Array into Smaller Arrays
// Task: Write a function chunkArray that splits an array into chunks of a specific size.

// SOLUTION

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i = i + size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));

// OUTPUT: [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
