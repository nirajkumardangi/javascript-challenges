// Challenge 8: Check for Ending
// Task: Write a function confirmEnding that checks if a string ends with the given target string. For example, confirmEnding("Bastian", "n") should return true.

// SOLUTION

function confirmEnding(str, target){
  return str.slice(-1) === target;
}

const result = confirmEnding("Bastian", "n");
console.log(result);

// OUTPUT: true;