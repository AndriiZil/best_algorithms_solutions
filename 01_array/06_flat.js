'use strict';

const array = [[1, 2], [3, 4], [5, [6, 7]]];

function flatArray(arr) {
  return arr.reduce((acc, val) => [...acc, ...val], []);
}

console.log(flatArray(array)); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
