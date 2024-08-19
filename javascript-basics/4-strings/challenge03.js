// Challenge 3: Count Vowels
// Task: Write a function countVowels that counts the number of vowels (a, e, i, o, u) in a given string. For example, countVowels("javascript") should return 3.

// SOLUTION

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) count++;
  }
  return count;
}

const result = countVowels('javascript');
console.log(result);

// OUTPUT: 3 