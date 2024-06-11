'use strict';

function capitalizeA(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function capitalizeB(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

console.log(capitalizeA('oksana')); // Oksana
console.log(capitalizeB('oksana')); // Oksana
