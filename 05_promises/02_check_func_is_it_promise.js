"use strict";

const notPromise = {};

const myPromise = Promise.resolve("promise");

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

console.log(isPromise(notPromise)); // false
console.log(isPromise(myPromise)); // true
