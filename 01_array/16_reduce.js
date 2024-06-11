'use strict';

const friends = [
  { name: 'Anna', books: ['Essential Grammar in Use', 'Turkish TV'] },
  { name: 'Andrii', books: ['Tom Soyer', 'The Lord of the Rings'] },
  { name: 'Lara', books: ['The Reader'] },
];

function groupBooks(array) {
  return array.reduce(
    (acc, val) => {
      return [...acc, ...val.books];
    },
    ['First Book'],
  );
}

console.log(groupBooks(friends));
/**
 * [
 *   'First Book',
 *   'Essential Grammar in Use',
 *   'Turkish TV',
 *   'Tom Soyer',
 *   'The Lord of the Rings',
 *   'The Reader'
 * ]
 */
