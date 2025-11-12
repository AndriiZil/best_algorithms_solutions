'use strict';

/**
 * 	•	access by index: O(1)
 * 	•	push/pop (end): amortized O(1)
 * 	•	shift/unshift (start): O(n)
 * 	•	insert/remove middle: O(n)
 */

const array = [1, 2, 3, 4];

array.push(5); // O(1)
array.pop(); // O(1)

array.unshift(); // O(n), adds new element to the start of array
array.shift(); // O(n), removes element from the start of array

console.log(array[2]); // O(1)
