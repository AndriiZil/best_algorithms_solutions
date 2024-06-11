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

function flatten2(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
    [],
  );
}

console.log(flatten([1, 2, 3, [4, 5, [6, 7, [8, 9, [[10]]]]]])); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(flatten2([1, 2, 3, [4, 5, [6, 7, [8, 9, [[10]]]]]])); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
