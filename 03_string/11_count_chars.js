'use strict';

function countChars(string) {
  const charMap = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (const char in charMap) {
    console.log(`Char ${char}, Count: ${charMap[char]} times`);
  }
}

countChars('hello world');
/**
 * Char h, Count: 1 times
 * Char e, Count: 1 times
 * Char l, Count: 3 times
 * Char o, Count: 2 times
 * Char  , Count: 1 times
 * Char w, Count: 1 times
 * Char r, Count: 1 times
 * Char d, Count: 1 times
 */
