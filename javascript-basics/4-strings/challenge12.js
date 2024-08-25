// Challenge 12: Count Words in a String
// Task: Write a function countWords that counts the number of words in a string. For example, countWords("The quick brown fox") should return 4.

// SOLUTION

function countWords(str) {
  return str.split(' ').length;
}

const result = countWords('The quick brown fox');
console.log(result);

// OUTPUT: 4
