"use strict";

/**
 * Return true if the string in the first element of the array contains all of the letters of the string
 * in the second element of the array.
 */

function mutation(arr) {
  return arr[1].split("").every((str) => {
    return arr[0].includes(str);
  });
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["Alien", "line"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["Noel", "Ole"])); // false
