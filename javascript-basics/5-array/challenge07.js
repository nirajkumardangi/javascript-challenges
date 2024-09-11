// Challenge 7: Concatenate Two Arrays
// Task: Write a function concatArrays that concatenates two arrays

// SOLUTION
function concatArrays(arr1, arr2) {
  // return arr1.concat(arr2);

  let i;
  let concatArr = [];
  for (i = 0; i < arr1.length; i++) {
    concatArr.push(arr1[i]);
  }
  for (i = 0; i < arr2.length; i++) {
    concatArr.push(arr2[i]);
  }
  return concatArr;
}

console.log(concatArrays([1, 2], [3, 4]));

// OUTPUT: [ 1, 2, 3, 4 ]
