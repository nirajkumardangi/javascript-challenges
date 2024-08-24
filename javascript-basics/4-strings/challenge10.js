// Challenge 10: Anagram Check
// Task: Write a function areAnagrams that checks if two strings are anagrams of each other (contain the same characters in a different order). For example, areAnagrams("listen", "silent") should return true.

// SOLUTION

function areAnagrams(str1, str2) {
  const word1 = str1.split('').sort().join('');
  const word2 = str2.split('').sort().join('');
  return word1 === word2;
}

const result = areAnagrams('listen', 'silent');
console.log(result);

// OUTPUT:
