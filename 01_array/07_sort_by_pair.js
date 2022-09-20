'use strict';

const array = [['a', 1], ['b', 2], ['c', 3]];

function sortByPair(array) {
  return array.reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value
  }), {})
}

console.log(sortByPair(array)); // { a: 1, b: 2, c: 3 }
