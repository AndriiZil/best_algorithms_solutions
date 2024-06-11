"use strict";

const user = { name: "Andrii" };
const admin = { name: "Andrii" };
const test = { name: "Sara" };

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(isEqual(user, admin)); // true
console.log(isEqual(user, test)); // false
