// Challenge 14: Check if a String Contains All Letters of the Alphabet
// Task: Write a function isPangram that checks if a string contains every letter of the alphabet at least once. For example, isPangram("The quick brown fox jumps over the lazy dog") should return true.

// SOLUTION

function isPangram(str) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCasedStr = str.toLowerCase();

  for (let i = 0; i < alphabets.length; i++) {
    if (!lowerCasedStr.includes(alphabets[i])) {
      return false;
    }
  }
  
  return true; 
}

const result = isPangram('The quick brown fo jumps over the lazy dog');
console.log(result);


// OUTPUT:
