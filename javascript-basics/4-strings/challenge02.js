// Challenge 2: Palindrome Check
// Task: Write a function isPalindrome that checks if a given string is a palindrome (a word that reads the same backward as forward). For example, isPalindrome("racecar") should return true.

// SOLUTION

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  console.log('niraj' === 'niraj')
  return str === reversed;
}

const result = isPalindrome('racecar');
// console.log(result);

// OUTPUT: true