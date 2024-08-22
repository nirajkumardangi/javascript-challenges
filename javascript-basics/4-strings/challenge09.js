// Challenge 9: Find the First Non-Repeating Character
// Task: Write a function firstNonRepeatingChar that finds the first character in a string that does not repeat. For example, firstNonRepeatingChar("swiss") should return "w".


// SOLUTION

function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("swiss"));

// OUTPUT: i