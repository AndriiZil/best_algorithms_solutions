'use strict';

function compressBoxesTwice(boxes) {
  boxes.forEach(console.info); // O(n)

  boxes.forEach(console.info); // O(n)
}

// O(2n) => after dropping the constants O(n)
