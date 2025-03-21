'use strict';

const notPromise = {};

function simple() {}

const myPromise = Promise.resolve('promise');

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}

console.log(isPromise(notPromise)); // false
console.log(isPromise(myPromise)); // true
console.log(isPromise(simple)); // false
