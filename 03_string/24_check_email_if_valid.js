'use strict';

function checkEmailIfValid(email) {
  return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
}

console.log(checkEmailIfValid('example@example.com')); // true
console.log(checkEmailIfValid('example.com')); // false
