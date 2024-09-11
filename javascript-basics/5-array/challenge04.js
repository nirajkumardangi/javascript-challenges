// Challenge 4: Remove Duplicates from an Array
// Task: Write a function removeDuplicates that removes duplicate elements from an array.

function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 8, 8, 3, 3]));

// OUTPUT: [1, 2, 3, 8];
