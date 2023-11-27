'use strict';

function confirmEnding(str, target) {
  return str.endsWith(target);
}

console.log(confirmEnding('Bastian', 'n')); // true
console.log(confirmEnding('Congratulation', 'on')); // true
console.log(confirmEnding('Connor', 'n')); // false
console.log(confirmEnding('Walking on water and developing software from a specification are easy if both are frozen', 'specification')); // false
