"use strict";

function removeDuplicates1(string) {
  const chars = [];
  const charMap = {};

  for (let char of string) {
    if (!charMap[char]) {
      charMap[char] = true;
      chars.push(char);
    }
  }

  return chars.join("");
}

function removeDuplicates2(string) {
  return Array.from(new Set(string)).join("");
}

console.log(removeDuplicates1("oasjdsdgnkjdkdoqejgfmnjdfmfkas")); // oasjdgnkqefm
console.log(removeDuplicates2("oasjdsdgnkjdkdoqejgfmnjdfmfkas")); // oasjdgnkqefm
