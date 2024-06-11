"use strict";

const arr1 = [1, 2, 3, 4, 7, 9];
const arr2 = [2, 3, 6, 4, 2, 5];

function getUniqueFromSource(scourse, dest) {
  return scourse.filter((item) => !dest.includes(item));
}

console.log(getUniqueFromSource(arr1, arr2)); // [ 1, 7, 9 ]
