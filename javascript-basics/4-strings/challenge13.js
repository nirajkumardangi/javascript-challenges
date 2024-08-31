// Challenge 13: Remove Duplicate Characters
// Task: Write a function removeDuplicates that removes duplicate characters from a string. For example, removeDuplicates("aabbccddeeff") should return "abcdef".

// SOLUTION

function removeDuplicates(str) {
  return str
    .split('')
    .filter((item, index, array) => {
      return array.indexOf(item) === index;
    })
    .join(''); 
}

const result = removeDuplicates('aabbccbbddeeff');
console.log(result);

// OUTPUT: abcdef
