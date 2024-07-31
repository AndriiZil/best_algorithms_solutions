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

// ---------------------------------------------------------------

function getUniques(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const elementIndex = string.split('').findIndex((el) => el === string[i]);
    if (!string.slice(elementIndex + 1).includes(string[i])) {
      result += string[i];
    }
  }

  return result;
}
