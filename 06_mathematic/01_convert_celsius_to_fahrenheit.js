'use strict';

function convertCtoF(celsius) {
  const result = (celsius * 1.8) + 32;
  console.log({ result });

  return result
}

convertCtoF(30); // => { result: 86 }
convertCtoF(20); // => { result: 68 }
convertCtoF(0); // => { result: 32 }
convertCtoF(-10); // => { result: 14 }
convertCtoF(-30); // => { result: -22 }
