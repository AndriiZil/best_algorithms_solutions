'use strict';

/**
 * Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
 *
 * A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
 *
 * A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
 *
 * Please solve it without the built-in Array.flat method.
 *
 *
 *
 * Example 1:
 *
 * Input
 * arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
 * n = 0
 * Output
 * [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
 *
 * Explanation
 * Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened.
 * Example 2:
 *
 * Input
 * arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
 * n = 1
 * Output
 * [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
 *
 * Explanation
 * The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.
 * Example 3:
 *
 * Input
 * arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
 * n = 2
 * Output
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
 *
 * Explanation
 * The maximum depth of any subarray is 1. Thus, all of them are flattened.
 */

function flattenArray(arr, depth = Infinity) {
  // Define a result array to store the flattened elements
  let result = [];

  // Define a recursive function to traverse the array
  function traverse(array, currentDepth) {
    // Loop through each element in the array
    array.forEach((element) => {
      // If the element is an array and current depth is less than the specified depth
      if (Array.isArray(element) && currentDepth < depth) {
        // Recursively call traverse with incremented depth
        traverse(element, currentDepth + 1);
      } else {
        // If the element is not an array or max depth reached, add it to the result array
        result.push(element);
      }
    });
  }

  // Call the traverse function with the initial array and starting depth of 0
  traverse(arr, 0);

  // Return the flattened result array
  return result;
}

console.log(
  flattenArray([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1),
);
