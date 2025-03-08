'use strict';

function findBox(boxes, target) {
  for (let box of boxes) {
    if (box === target) {
      console.log('Found it!');
      break;
    }
  }
}

/**
 * Best case: O(1) (if the item is the first element).
 * Worst case: O(n) (if the item is last or not present).
 * Big O complexity: O(n).
 */
