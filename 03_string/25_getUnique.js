'use strict';

function getUnique(string) {
  const collection = string.split('').reduce((acc, val) => {
    if (acc[val]) {
      acc[val] += 1;
    } else {
      acc[val] = 1;
    }

    return acc;
  }, {});

  let result = null;

  Object.entries(collection).forEach(([key, value]) => {
    if (value === 1) {
      result = key;
    }
  });

  return result;
}

console.log(getUnique('aabbccdde')); // e
console.log(getUnique('aabbccddeeeffg')); // g
