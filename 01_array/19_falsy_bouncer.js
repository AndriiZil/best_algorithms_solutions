"use strict";

function bouncer(arr) {
  return arr.filter((el) => !!el);
}

console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]
console.log(bouncer(["a", "b", "c"])); // [ 'a', 'b', 'c' ]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []
console.log(bouncer([null, NaN, 1, 2, undefined])); // [ 1, 2 ]
