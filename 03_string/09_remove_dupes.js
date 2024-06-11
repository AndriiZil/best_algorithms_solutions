'use strict';

function removeDupes(string) {
  const result = [];
  const charMap = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (!charMap[char]) {
      charMap[char] = true;
      result.push(char);
    }
  }

  return result.join('');
}

function removeDupes2(string) {
  return [...new Set(string)].join('');
}

console.log(removeDupes('podosaodooguuuufas')); // podsaguf
console.log(removeDupes2('podosaodooguuuufas')); // podsaguf
