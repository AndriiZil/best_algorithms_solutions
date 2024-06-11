'use strict';

const isValidDate = (date) => date instanceof Date && !isNaN(date);

console.log(isValidDate(new Date('This is not date.'))); // false
console.log(isValidDate(new Date('08-10-2023'))); // true
