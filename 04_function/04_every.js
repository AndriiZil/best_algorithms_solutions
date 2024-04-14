'use strict';

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
}

const arr = [1, 2, 3];
const trueArr = ['sum', 'sum', 'sum'];

console.log(arr.myEvery((el) => el === 1)); // false
console.log(trueArr.every((el) => el === 'sum')); // true
