'use strict';

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue === undefined ? undefined : initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
}

const arr = [1, 2, 3, 4, 5];

console.log(arr.myReduce((acc, val) => acc + val));
const result = arr.myReduce((acc, val) => {
  acc.push(`Val: ${val}`);
  return acc;
}, []);
console.log(result); // [ 'Val: 1', 'Val: 2', 'Val: 3', 'Val: 4', 'Val: 5' ]
