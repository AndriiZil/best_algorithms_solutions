"use strict";

function factorialize(num) {
  if (num < 1) return 0;
  if (num === 1) return num;

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1));

console.log(factorialize(1)); // 1
console.log(factorialize(5)); // => 120
console.log(factorialize(10)); // => 3628800
console.log(factorialize(20)); // => 2432902008176640000

/**/
console.log(factorial(1)); // 1
console.log(factorial(5)); // => 120
console.log(factorial(10)); // => 3628800
console.log(factorial(20)); // => 2432902008176640000
