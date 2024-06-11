"use strict";

const nums = [1, 5, 5, 9];
const objects = [{ value: 1 }, { value: 2 }];

Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }

  return result;
};

console.log(nums.myFilter((num) => num > 5)); // [ 9 ]
console.log(objects.myFilter((ob) => ob.value === 2)); // => [ { value: 2 } ]
