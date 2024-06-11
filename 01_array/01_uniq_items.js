"use strict";

const array1 = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 2];

console.log(Array.from(new Set(array1))); // [ 1, 2, 3, 4, 5 ]

console.log([...new Set(array1)]); // [ 1, 2, 3, 4, 5 ]
