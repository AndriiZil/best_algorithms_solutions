'use strict';

function pluck(objs, key) {
  return objs.map((obj) => obj[key]);
}

console.log(pluck([{ name: 'Andrii', age: 32 }, { name: 'Anna', age: 23 }], 'name')); // [ 'Andrii', 'Anna' ]
