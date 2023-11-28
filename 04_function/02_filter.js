'use strict';

Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }

  return result;
}

const example = [{ x: 1 }, { x: 2 }, { x: 3 }];

const result = example.myFilter((val) => val.x > 1);
const result2 = example.myFilter((val) => val.x < 3);

console.log(result); // [ { x: 2 }, { x: 3 } ]
console.log(result2); // [ { x: 1 }, { x: 2 } ]
