'use strict';

function reverse1(string) {
  return string.split('').reverse().join('');
}

function reverse2(string) {
  let str = '';
  for (let s of string) {
    str = s + str;
  }
  return str;
}

function reverse3(string) {
  return string.split('').reduce((acc, val) => val + acc, '')
}

console.log(reverse1('string')); // gnirts
console.log(reverse2('string')); // gnirts
console.log(reverse3('string')); // gnirts
