'use strict';

function duplicateArray(arr) {
  let newArr = [...arr]; // Creates a new array
  return newArr;
}

/**
 * Time Complexity: O(n) (copies each item once).
 * Space Complexity: O(n) (creates a new array of size n).
 */
