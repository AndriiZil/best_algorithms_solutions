'use strict';

function spinalCase(str) {
  return str.split(' ').map(w => w.toLowerCase()).join('-');
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
