'use strict';

function snakeToCamelCase(s) {
  return s.toLowerCase()
    .replace(/(_\w)/g, (w) => w.toUpperCase()
      .slice(1));
}

console.log(snakeToCamelCase('learn_javascript')); // learnJavascript
console.log(snakeToCamelCase('coding_beauty')); // codingBeauty
