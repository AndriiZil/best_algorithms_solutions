'use strict';

function printPairs(boxes) {
  boxes.forEach((box1) => {
    boxes.forEach((box2) => {
      console.log(box1, box2);
    });
  });
}

/**
 * Total time complexity: O(n * n) = O(n²).
 */
