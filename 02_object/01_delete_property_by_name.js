"use strict";

const user = {
  name: "Andrii",
  age: 30,
  country: "Ukraine",
};

const { country, ...cleanedUser } = user;

console.log(cleanedUser); // { name: 'Andrii', age: 30 }
