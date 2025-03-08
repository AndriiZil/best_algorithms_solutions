'use strict';

function compareArrays(arr1, arr2) {
  arr1.forEach((item) => console.log(item)); // O(a)
  arr2.forEach((item) => console.log(item)); // O(b)
}

/**
 * Total time complexity: O(a + b), not O(n).
 */
