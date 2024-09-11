// Challenge 5: Check if an Array Contains a Value
// Task: Write a function containsValue that checks if a value is present in an array.

// SOLUTION
function containsValue(arr, value) {
  // return arr.includes(value);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  
  return false;
}

console.log(containsValue([1, 2, 3], 2));

// OUTPUT: true
