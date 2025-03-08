'use strict';

function printBoxes(boxes) {
  boxes.forEach(console.log); // O(n)
  boxes.forEach(console.log); // O(n)
}

/**
 * Total time complexity: O(2n)
 * After dropping constants: O(n)
 */
