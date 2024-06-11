"use strict";

function isUnique(string) {
  const set = new Set();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (set.has(char)) {
      return false;
    }

    set.add(char);
  }

  return true;
}

function isUnique2(string) {
  return new Set(string).size === string.length;
}

function isUnique3(string) {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (string.lastIndexOf(char) !== i) {
      return false;
    }
  }

  return true;
}

console.log(isUnique("abcdef")); // true
console.log(isUnique("1234567")); // true
console.log(isUnique("abcABC")); // true
console.log(isUnique("abcadef")); // false

console.log("----------------------------");

console.log(isUnique2("abcdef")); // true
console.log(isUnique2("1234567")); // true
console.log(isUnique2("abcABC")); // true
console.log(isUnique2("abcadef")); // false

console.log("----------------------------");

console.log(isUnique3("abcdef")); // true
console.log(isUnique3("1234567")); // true
console.log(isUnique3("abcABC")); // true
console.log(isUnique3("abcadef")); // false
