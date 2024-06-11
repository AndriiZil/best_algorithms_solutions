'use strict';

function whatIsInAName(collection, source) {
  let result = [];

  for (let key in source) {
    result = collection.filter((el) => el[key] === source[key]);
  }

  return result;
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' },
  ),
); // [{ first: "Tybalt", last: "Capulet" }]

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  }),
);
// [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
