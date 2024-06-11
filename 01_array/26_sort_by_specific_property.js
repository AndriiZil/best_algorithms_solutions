"use strict";

const toSort = [
  { id: 1, name: "Bogdan" },
  { id: 4, name: "Anna" },
  { id: 3, name: "Igor" },
  { id: 2, name: "Yuriy" },
];

function softBySpecificProperty(arr, key) {
  return arr.sort((a, b) => a[key] > b[key] || -1);
}

console.log(softBySpecificProperty(toSort, "id"));
/**
 * [
 *   { id: 1, name: 'Bogdan' },
 *   { id: 2, name: 'Yuriy' },
 *   { id: 3, name: 'Igor' },
 *   { id: 4, name: 'Anna' }
 * ]
 */
