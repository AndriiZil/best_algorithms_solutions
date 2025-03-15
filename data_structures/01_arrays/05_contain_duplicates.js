'use strict';

function containDuplicates(array) {
  const collection = {};

  for (const item of array) {
    if (collection.hasOwnProperty(item)) {
      return true;
    }

    collection[item] = true;
  }

  return false;
}

console.log(containDuplicates([1, 2, 2, 3, 5, 7, 3, 23, 2]));
console.log(containDuplicates([2, 5, 7]));
