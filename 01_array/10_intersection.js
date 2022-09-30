'use strict';

function intersection(arr1, arr2) {
  return [...new Set(arr1)].filter(el => [...new Set(arr2)].includes(el));
}

console.log(intersection([1, 2, 3], [2, 1, 4])); // [1, 2]
