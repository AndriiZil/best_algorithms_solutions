'use strict';

function findLongestWordLength(string) {
  let maxLength = 0;

  if (!string.length) return 0;

  for (let world of string.split(' ')) {
    if (world.length > maxLength) {
      maxLength = world.length;
    }
  }

  return maxLength;
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog')); // 6
console.log(findLongestWordLength('May the force be with you')); // 5
console.log(findLongestWordLength('Google do a barrel roll')); // 6
console.log(findLongestWordLength('What if we try a super-long word such as otorhinolaryngology')); // 19
