'use strict';

function truncateString(str, num) {
  const transformedString = str.split(' ');

  for (let world of transformedString) {
    if (world.length >= num) {
      return `${world.slice(0, num)}...`;
    }
  }
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8)); // A-tisket...
console.log(truncateString('Absolutely Longer', 2)); // Ab...
