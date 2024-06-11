"use strict";

function removeObjectById(array, id) {
  return array.filter((object) => object.id !== id);
}

const cars = [
  { id: 1, name: "Tesla" },
  { id: 2, name: "BMW" },
  { id: 3, name: "Audi" },
  { id: 4, name: "Opel" },
];

console.log(removeObjectById(cars, 4));

/**
 * [
 *   { id: 1, name: 'Tesla' },
 *   { id: 2, name: 'BMW' },
 *   { id: 3, name: 'Audi' },
 * ]
 */
