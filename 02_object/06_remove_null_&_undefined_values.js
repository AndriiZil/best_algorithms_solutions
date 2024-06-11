"use strict";

const obj = {
  name: "Ted",
  age: null,
  address: undefined,
  city: "Krakow",
};

function removeNullUndefined1(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => Boolean(value)),
  );
}

function removeNullUndefined2(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    if (!!val) {
      acc[key] = val;
    }
    return acc;
  }, {});
}

console.log(removeNullUndefined1(obj)); // { name: 'Ted', city: 'Krakow' }
console.log(removeNullUndefined2(obj)); // { name: 'Ted', city: 'Krakow' }
