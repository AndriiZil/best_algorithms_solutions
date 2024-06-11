'use strict';

function intersection(arr1, arr2) {
  return [...new Set(arr1)].filter((el) => arr2.includes(el));
}

console.log(intersection([1], [1, 2, 3])); // [ 1 ]
console.log(intersection([1, 2, 3], [2])); // [ 2 ]
console.log(intersection([1, 1, 1, 2], [3, 1, 2, 1, 2, 5])); // [ 1, 2 ]
console.log(intersection([1, 2, 3], [2, 1, 4])); // [ 1, 2 ]
