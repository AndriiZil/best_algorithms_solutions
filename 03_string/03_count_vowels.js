"use strict";

function countVowels(string) {
  const vowels = "aouieu";
  let count = 0;

  for (let char of string) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("sodjdufben")); // 3
