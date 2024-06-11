'use strict';

const nums = [1, 5, 5, 9];
const objects = [{ value: 1 }, { value: 2 }];

Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

console.log(nums.myMap((val) => val ** 2)); // => [ 1, 25, 25, 81 ]
console.log(objects.myMap((ob) => ob.value)); // [1, 2]
