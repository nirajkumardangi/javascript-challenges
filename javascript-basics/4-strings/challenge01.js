// Challenge 1: Reverse a String
// Task: Write a function reverseString that takes a string as input and returns the string reversed. For example, reverseString("hello") should return "olleh".

// SOLUTION

function reverseString(str) {
  return str.split('').reverse().join('');
}

const result = reverseString('hello');
console.log(result);

// OUTPUT: olleh
