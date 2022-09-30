'use strict';

function maxFrequency(array) {
  const map = {};
  let maxFreq = 0
  let maxFreqString = array[0];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (!map[element]) {
      map[element] = 1;
    } else {
      map[element]++;
    }

    if (map[element] > maxFreq) {
      maxFreq = map[element];
      maxFreqString = element;
    }
  }

  return maxFreqString;
}

console.log(maxFrequency(['asd', 'asd', 'fds', 'fgg', 'eew', 'eer', 'eer'])); // asd
