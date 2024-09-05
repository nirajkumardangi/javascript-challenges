// Reverse Ram is a good boy

// SOLUTION

let reversed = [];
function reverseWord(str) {
  const words = str.split(' ').reverse();
  const reverseArray = words.map(word => word.split('').reverse().join(''));
  return reverseArray.join(' ');
}

console.log(reverseWord('Ram is a good boy'));

// yob doog a si maR

// OUTPUT: 