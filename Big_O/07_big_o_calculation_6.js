'use strict';

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.info(array[i], array[j]);
    }
  }
}

logAllPairs([1, 2, 3, 4, 5]);

/**
 * O(n * n)
 * O(n^2)
 */
