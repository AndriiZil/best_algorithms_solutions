'use strict';

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
  if (Array.isArray(obj)) {
    return obj.reduce((acc, element) => {
      if (Array.isArray(element)) {
        const nested = compactObject(element);
        acc.push(nested);
      } else if (element && typeof element === 'object') {
        const nestedObj = compactObject(element);
        acc.push(nestedObj);
      } else if (Boolean(element)) {
        acc.push(element);
      }
      return acc;
    }, []);
  } else if (obj && typeof obj === 'object') {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (Array.isArray(value)) {
        const nested = compactObject(value);
        acc[key] = nested;
      } else if (value && typeof value === 'object') {
        const nestedObj = compactObject(value);
        acc[key] = nestedObj;
      } else if (Boolean(value)) {
        acc[key] = value;
      }
      return acc;
    }, {});
  }
  return obj;
};

console.log(compactObject([null, 0, false, 1])); // [ 1 ]
console.log(compactObject({ a: null, b: [false, 1] })); // { b: [ 1 ] }
console.log(compactObject([null, 0, 5, [0], [false, 16]])); // [ 5, [], [ 16 ] ]
console.log(compactObject([0, 1, 0, [[[null, 0], false], false], false])); // [1,[[[]]]]
console.log(
  compactObject([[[0]], true, false, {}, [], '', 42, 232, 4242, 942]),
); // [[[]],true,{},[],42,232,4242,942]
