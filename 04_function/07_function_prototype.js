"use strict";

const ArrayWrapper = function (nums) {
  this.value = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.value.reduce((acc, num) => acc + num, 0);
};

ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.value);
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2);

console.log("=", String(obj1));
console.log("=", String(obj2));
