"use strict";

function isStrRotated(source, test) {
  return (source + test).includes(test) && source.length === test.length;
}

console.log(isStrRotated("javascript", "scriptjava")); // true
console.log(isStrRotated("strictequal", "equal")); // false
