// Challenge 6: Truncate a String
// Task: Write a function truncateString that truncates a string if it is longer than a given maximum length and adds "..." at the end. For example, truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".

// SOLUTION

function truncateString(str, length = 8) {
  return str.slice(0, length) + "...";
}

const result = truncateString('A-tisket a-tasket A green and yellow basket', 8);
console.log(result);

// OUTPUT:
