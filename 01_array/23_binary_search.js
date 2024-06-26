'use strict';

function binarySearch(array, targetElement) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === targetElement) {
      return mid; // Element found, return its index
    } else if (array[mid] < targetElement) {
      left = mid + 1; // Look in the right half
    } else {
      right = mid - 1; // Look in the left half
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
