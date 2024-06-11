"use strict";

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function chunk1(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

function chunks(array, size) {
  const results = [];
  let chunks = [];

  for (let index = 0; index < array.length; index++) {
    if (chunks.length === size) {
      results.push(chunks);
      chunks = [];
    }
    chunks.push(array[index]);
  }

  results.push(chunks);

  return results;
}
console.log(chunk1(testArray, 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
console.log(chunk1(testArray, 4)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10 ] ]
console.log(chunk1(testArray, 3)); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]

console.log(chunks(testArray, 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
console.log(chunks(testArray, 4)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10 ] ]
console.log(chunks(testArray, 3)); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
