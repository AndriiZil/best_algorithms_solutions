'use strict';

function printAllNumbersThenAllPairSums(numbers) {
  console.info('these are numbers');
  numbers.forEach(console.info);

  console.info('and these are their sums:');
  numbers.forEach((firstNumber) => {
    numbers.forEach((secondNumber) => {
      console.info(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

/**
 * O(n + n^2)
 * O(n^2)
 */
