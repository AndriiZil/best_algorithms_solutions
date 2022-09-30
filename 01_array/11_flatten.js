'use strict';

function flatten(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flat = flatten(array[i]);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(flatten([1, 2, 3, [4, 5, [6, 7, [8, 9]]]])); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
