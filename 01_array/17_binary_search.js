"use strict";

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1; // index of last element

  if (target < array[start] || target > array[end]) {
    return -1;
  }

  while (true) {
    console.count("searchCount");

    if (target === array[start]) {
      return start;
    }

    if (target === array[end]) {
      return end;
    }

    if (end - start <= 1) {
      return -1;
    }

    const middle = Math.floor((start + end) / 2);

    if (target > array[middle]) {
      start = middle + 1;
    } else if (target < array[middle]) {
      end = middle - 1;
    } else {
      return middle;
    }
  }
}

const searchArray = [1, 2, 5, 7, 12, 14, 25];

console.log(binarySearch(searchArray, 12));
