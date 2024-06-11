'use strict';

const nums = [1, 5, 5, 9];
const objects = [{ value: 1 }, { value: 2 }];

Array.prototype.myFind = function (callback) {
  let result;

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      result = this[index];
    }
  }

  return result;
};

console.log(nums.myFind((n) => n === 9)); // 9
console.log(nums.myFind((n) => n === 4)); // undefined

console.log(objects.myFind((ob) => ob.value === 1)); // { value: 1 }
console.log(objects.myFind((ob) => ob.value === 3)); // undefined
