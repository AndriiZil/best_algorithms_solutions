'use strict';

Array.prototype.myMap = function (callback) {
  const result = [];

  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }

  return result;
}

const example = [{ x: 1 }, { x: 2 }, { x: 3 }];

const result1 = example.myMap((val) => val.x * 3);
const result2 = example.myMap((val) => ({ value: val.x + 10 }));

console.log(result1); // [ 3, 6, 9 ]
console.log(result2); // [ { value: 11 }, { value: 12 }, { value: 13 } ]
