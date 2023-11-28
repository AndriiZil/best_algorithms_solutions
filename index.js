'use strict';

Array.prototype.myOwnFind = function (func) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result[0];
}

Array.prototype.myOwnMap = function (func) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(func(this[i], i, this));
  }

  return result;
}

Array.prototype.myOwnFilter = function (func) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
}

const example = [1, 2, 3];

console.log(example.myOwnFind((el) => el === 3));
console.log(example.myOwnMap((el) => el * 2));
console.log(example.myOwnFilter((el) => el < 3));
