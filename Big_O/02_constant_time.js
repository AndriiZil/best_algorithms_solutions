'use strict';

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.info(boxes[0]); // O(1)
  console.info(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)
