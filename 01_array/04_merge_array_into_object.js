"use strict";

const simpleArray = [{ a: 1 }, { b: 2 }, { c: 3 }];

function merge(array) {
  return array.reduce((acc, val) => ({ ...acc, ...val }), {});
}

console.log(merge(simpleArray)); // { a: 1, b: 2, c: 3 }
