'use strict';

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Each call makes 2 recursive calls.
 * Depth of recursion is n.
 * Time Complexity: O(2ⁿ) (exponential).
 */
