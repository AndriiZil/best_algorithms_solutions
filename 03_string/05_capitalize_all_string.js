'use strict';

function capitalizeAllString(string) {
  const strings = [];

  for (const str of string.split(' ')) {
    strings.push(str[0].toUpperCase() + str.slice(1));
  }

  return strings.join(' ');
}

console.log(capitalizeAllString('string string')); // String String
