'use strict';

function repeatStringNumTimes(string, num) {
  let result = '';

  if (num <= 0) {
    return result;
  }

  for (let i = 0; i < num; i++) {
    result += string;
  }

  return result;
}

console.log(repeatStringNumTimes('*', 3)); // ***
console.log(repeatStringNumTimes('abc', 3)); // abcabcabc
console.log(repeatStringNumTimes('abc', 4)); // abcabcabcabc
console.log(repeatStringNumTimes('*', 8)); // ********
console.log(repeatStringNumTimes('abc', -2)); // ''
repeatStringNumTimes('abc', 0) // ''
