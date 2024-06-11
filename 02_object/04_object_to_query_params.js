"use strict";

function objectToQueryParams(obj) {
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");
}

console.log(objectToQueryParams({ name: "Andrii", age: 38 })); // name=Andrii&age=38
