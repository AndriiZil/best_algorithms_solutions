'use strict';

function printCombinations(boxes) {
  boxes.forEach((box) => console.log(box)); // O(n)

  boxes.forEach((box1) => {
    boxes.forEach((box2) => {
      console.log(box1, box2); // O(n²)
    });
  });
}

/**
 * Total time complexity: O(n + n²)
 * After dropping the non-dominant term: O(n²) or O(n^2)
 */
