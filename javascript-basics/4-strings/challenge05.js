// Challenge 5: Title Case a Sentence
// Task: Write a function titleCase that converts the first letter of each word in a string to uppercase and the rest to lowercase. For example, titleCase("I'm a little teapot") should return "I'm A Little Teapot".

// SOLUTION

function titleCase(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}

const result = titleCase("I'm a little teapot");
console.log(result);

// OUTPUT: I'm A Little Teapot