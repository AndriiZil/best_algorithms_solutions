"use strict";

function countOccurrences(arr, value) {
  return arr.reduce((acc, val) => {
    if (val === value) {
      acc += 1;
    }
    return acc;
  }, 0);
}

console.log(countOccurrences(["Yes", "Yes", "No", "Yes"], "Yes")); // 3
