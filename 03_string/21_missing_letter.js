'use strict';

/**
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const firstLetterIndex = letters.indexOf(str[0]);
  const substring = letters.slice(firstLetterIndex);

  for (let i = 0; i < str.length; i++) {
    if (substring[i] !== str[i]) {
      return substring[i];
    }
  }
}

console.log(fearNotLetter('abce')); // d
console.log(fearNotLetter('abcdefghjklmno')); // i
console.log(fearNotLetter('stvwx')); // u
console.log(fearNotLetter('bcdf')); // e
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz')); // undefined
