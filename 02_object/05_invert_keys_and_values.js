'use strict';

function invert(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key]),
  );
}

console.log(invert({ name: 'Andrii', age: 38 })); // { '38': 'age', Andrii: 'name' }
