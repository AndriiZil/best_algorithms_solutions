'use strict';

const array = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];

function sortByPair(array) {
  return array.reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {},
  );
}

function sortByPair2(arr) {
  return Object.fromEntries(arr);
}

console.log(sortByPair(array)); // { a: 1, b: 2, c: 3 }
console.log(sortByPair2(array)); // { a: 1, b: 2, c: 3 }
