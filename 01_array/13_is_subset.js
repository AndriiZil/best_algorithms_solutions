'use strict';

function isSubset(source, subset) {
  return subset.every(item => source.includes(item));
}

function isSubset2(source, subset) {
  if (source.length < subset.length) {
    return false;
  }

  for (let i = 0; i < subset.length; i++) {
    const index = source.indexOf(subset[i]);

    if (index === -1) {
      return false
    }

    delete source[index];
  }
  return true;
}

console.log(isSubset([1, 2, 3], [3, 2, 1])); // true
console.log(isSubset([1, 2, 3, 4, 5], [3, 5])); // true

console.log(isSubset2([1, 2, 3], [3, 2, 1])); // true
console.log(isSubset2([1, 2, 3, 4, 5], [3, 5])); // true
