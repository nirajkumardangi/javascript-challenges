// Challenge 4: Find the Longest Word
// Task: Write a function findLongestWord that takes a string of words and returns the length of the longest word. For example, findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.

// SOLUTION

function findLongestWord(str) {
  let words = str.split(' ');
  let longest = words[0];
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest.length;
}

const result = findLongestWord('The quick brown fox jumped over the lazy dog');
console.log(result);

// OUTPUT: 6
