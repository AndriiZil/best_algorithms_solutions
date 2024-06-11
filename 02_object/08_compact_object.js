"use strict";

/**
 * Given an object or array obj, return a compact object.
 *
 * A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
 *
 * You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 *
 *
 *
 * Example 1:
 *
 * Input: obj = [null, 0, false, 1]
 * Output: [1]
 * Explanation: All falsy values have been removed from the array.
 * Example 2:
 *
 * Input: obj = {"a": null, "b": [false, 1]}
 * Output: {"b": [1]}
 * Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
 * Example 3:
 *
 * Input: obj = [null, 0, 5, [0], [false, 16]]
 * Output: [5, [], [16]]
 * Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
 */

const compactObject = function (obj) {
  let result = [];

  if (Array.isArray(obj)) {
    obj.forEach((element) => {
      if (Array.isArray(element)) {
        result.push(element.filter(Boolean));
      } else if (Boolean(element)) {
        result.push(element);
      }
    });
  } else {
    const map = Object.entries(obj);
    const filtered = [];

    map.forEach(([key, value]) => {
      if (Array.isArray(value)) {
        filtered.push([key, value.filter(Boolean)]);
      } else if (!Array.isArray(value) && Boolean(value)) {
        filtered.push([key, value]);
      }
    });

    return Object.fromEntries(filtered);
  }

  return result;
};

console.log(compactObject([null, 0, false, 1])); // [ 1 ]
console.log(compactObject({ a: null, b: [false, 1] })); // { b: [ 1 ] }
console.log(compactObject([null, 0, 5, [0], [false, 16]])); // [ 5, [], [ 16 ] ]
