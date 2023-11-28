'use strict';

Array.prototype.myFind = function (callback) {
  const result = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }

  return result[0];
}

const example = [{ x: 1 }, { x: 2 }, { x: 3 }];

const result = example.myFind((val) => val.x === 3);

console.log(result); // { x: 3 }
