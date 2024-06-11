"use strict";

/**
 * The function must accept an indeterminate number of arguments, also known as a variadic function. You can access
 * the additional arguments by adding a rest parameter to the function definition or using the arguments object.
 */

function destroyer(arr) {
  const [values, ...forRemove] = Object.values(arguments);
  return values.filter((el) => !forRemove.includes(el));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // 1, 1
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // ['hamburger']
console.log(
  destroyer(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan",
  ),
); // [ 12, 92, 65 ]
