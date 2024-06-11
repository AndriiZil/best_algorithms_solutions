'use strict';

function getMaxChar(string) {
  const charMap = {};
  let maxCharCount = 0;
  let maxChar = string[0];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }

    if (charMap[char] > maxCharCount) {
      maxCharCount = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(getMaxChar('Super string is present there now')); // e
