"use strict";

function palindrome(string) {
  const reversed = string.split("").reverse().join("");
  return string === reversed;
}

console.log(palindrome("racecar")); // true
