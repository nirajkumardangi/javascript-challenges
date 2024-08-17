/* Challenge 5: Variable Swap
Task: Declare two variables, x and y, and assign them the values 3 and 7 respectively. Swap their values without using a third variable. Print the values of x and y to the console after swapping. */

// CODE

let x = 3;
let y = 7;

x = x + y;
y = x - y;
x = x - y;

console.log(x, y);