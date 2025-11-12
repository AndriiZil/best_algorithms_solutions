'use strict';

function twoSum(nums, target) {
  const finalArray = [];
  const objIndices = {};

  for (let i = 0; i < nums.length; i++) {
    if (objIndices.hasOwnProperty(target - nums[i])) {
      finalArray.push(objIndices[target - nums[i]]);
      finalArray.push(i);
    } else {
      objIndices[nums[i]] = i;
    }
  }

  return finalArray;
}

console.log(twoSum([2, 7, 16, 15, 12], 18));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

/**
 * {
 *   [2] = 0;
 *   [7] = 1;
 *   []
 * }
 */

// ========================================================

const array = [2, 7, 16, 15, 12];

function twoSum(arr, target) {
  let count = 0;
  const table = {};
  let sum;

  for (let i = 1; i < arr.length; i++) {
    if (count <= arr.length) {
      sum = arr[count] + arr[i];
      if (sum === target) {
        table[sum] = [count, i];
      }
    }

    count++;
  }

  return table[target];
}

console.log(twoSum(array, 27));
