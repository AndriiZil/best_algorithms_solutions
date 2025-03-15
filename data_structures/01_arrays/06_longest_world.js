'use strict';

function longestWorld(str) {
  const collection = str.split(' ');
  let result = '';

  for (const word of collection) {
    if (result.length < word.length) {
      result = word;
    }
  }

  return result;
}

console.log(longestWorld('during the last part of his visit'));
