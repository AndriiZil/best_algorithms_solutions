'use strict';

const array = [1, 4, 5, 2, 3];

function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(sortArray(array)); // [ 1, 2, 3, 4, 5 ]
