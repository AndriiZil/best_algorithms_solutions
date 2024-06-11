"use strict";

function updateObjectById(array, id, newValue) {
  return array.map((object) => (object.id === id ? newValue : object));
}

const cars = [
  { id: 1, name: "Tesla" },
  { id: 2, name: "BMW" },
  { id: 3, name: "Audi" },
  { id: 4, name: "Opel" },
];

console.log(updateObjectById(cars, 4, { id: 4, name: "Skoda" }));
/**
 * [
 *   { id: 1, name: 'Tesla' },
 *   { id: 2, name: 'BMW' },
 *   { id: 3, name: 'Audi' },
 *   { id: 4, name: 'Skoda' }
 * ]
 */
