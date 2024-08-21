// Challenge 7: Repeat a String
// Task: Write a function repeatString that repeats a given string n times. For example, repeatString("abc", 3) should return "abcabcabc".

// SOLUTION

function repeatString(str, repetitionTimes) {
  return str.repeat(repetitionTimes);
}

const result = repeatString('hello!', 3);
console.log(result);

// OUTPUT: hello!hello!hello!