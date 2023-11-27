'use strict';

function myReplace(sentence, find, replace) {
  const capitalizedReplace = replace[0].toUpperCase() + replace.slice(1);
  const transformedStrings = sentence.split(' ');
  const searchIndex = transformedStrings.findIndex(el => el === find);
  transformedStrings.splice(searchIndex, 1, capitalizedReplace);

  return transformedStrings.join(' ');
}

function myReplace2(sentence, find, replace) {
  const capitalizedReplace = replace[0].toUpperCase() + replace.slice(1);
  const transformedStrings = sentence.split(' ');
  const searchIndex = transformedStrings.findIndex(el => el === find);
  transformedStrings[searchIndex] = capitalizedReplace;

  return transformedStrings.join(' ');
}

console.log(myReplace('His name is Tom', 'Tom', 'john'));
console.log(myReplace2('His name is Tom', 'Tom', 'john'));
