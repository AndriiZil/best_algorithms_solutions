"use strict";

function checkIfObjectsIsEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(checkIfObjectsIsEmpty({})); // true
console.log(checkIfObjectsIsEmpty({ name: "Andrii" })); // false
