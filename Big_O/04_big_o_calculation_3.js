'use strict';

function printFirstItemThenFirstHalfAndSayHi100Times(items) {
  console.info(items[0]); // O(1)

  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    // O(n/2)
    console.info(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.info('hi'); // O(100)
  }
}

printFirstItemThenFirstHalfAndSayHi100Times([1, 2, 3]);

/**
 * O(1 + n/2 + 100)
 * O(n/2 + 101)
 * O(n)
 */
