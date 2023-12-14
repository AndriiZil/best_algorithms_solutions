'use strict';

const array = [
  { id: 1, score: 4 },
  { id: 2, score: 8 },
  { id: 3, score: 32 },
  { id: 1, value: 43 },
  { id: 2, value: 65 },
  { id: 3, value: 12 },
];

function groupByPropName(array, propName) {
  return array.reduce((acc, val) => {
    const propertyName = val[propName]

    if (propName in val && !acc[propertyName]) {
      acc[propertyName] = [];
    }
    if (propName in val) {
      acc[propertyName].push(val);
    }

    return acc;
  }, {});
}

console.log(groupByPropName(array, 'id'));
/**
 * {
 *  '1': [ { id: 1, score: 4 }, { id: 1, value: 43 } ],
 *  '2': [ { id: 2, score: 8 }, { id: 2, value: 65 } ],
 *  '3': [ { id: 3, score: 32 }, { id: 3, value: 12 } ]
 * }
 */

console.log(groupByPropName(array, 'score'));
/**
 * {
 *   '4': [ { id: 1, score: 4 } ],
 *   '8': [ { id: 2, score: 8 } ],
 *   '32': [ { id: 3, score: 32 } ]
 * }
 */

console.log(groupByPropName(array, 'value'));
/**
 * {
 *   '12': [ { id: 3, value: 12 } ],
 *   '43': [ { id: 1, value: 43 } ],
 *   '65': [ { id: 2, value: 65 } ]
 * }
 */
