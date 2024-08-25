// Challenge 11: Convert to Camel Case
// Task: Write a function toCamelCase that converts a string to camel case. For example, toCamelCase("hello world") should return "helloWorld".

// SOLUTION

function toCamelCase(str) {
  return str.split(' ').map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

const result = toCamelCase('hello world');
console.log(result);

// OUTPUT: helloWorld
