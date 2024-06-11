'use strict';

/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
 * The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the
 * numbers between 1 and 4 (both inclusive) is 10.
 */

function sumAll(arr) {
  if (arr[0] === arr[1]) return 0;

  const sortedArr = arr.sort((a, b) => a - b);

  let result = 0;
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    result += i;
  }

  return result;
}

console.log(sumAll([1, 4])); // 10
console.log(sumAll([1, 4])); // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([10, 5])); // 45
