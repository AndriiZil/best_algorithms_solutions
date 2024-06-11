"use strict";

const arr1 = [{ id: 1 }, { id: 2 }];
const arr2 = [{ id: 1 }, { id: 2 }];
const arr3 = [{ id: 3 }, { id: 4 }];

function isEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
