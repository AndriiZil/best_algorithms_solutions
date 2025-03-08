'use strict';

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(console.info); // O(a)

  boxes2.forEach(console.info); // O(b)
}

/**
 * O(a + b)
 */

function compressNested(boxes, boxes2) {
  boxes.forEach((box) => {
    // O(a)
    console.info(box);
    boxes2.forEach((box) => {
      // O(b)
      console.info(box);
    });
  });
}

/**
 * O(a * b)
 */
