"use strict";

const arr = [
  "fgg",
  "asd",
  "asd",
  "eer",
  "eer",
  "fds",
  "fds",
  "fds",
  "eew",
  "eew",
  "eew",
  "eew",
];

function maxFrequency(array) {
  const map = {};
  let maxFreq = 0;
  let maxFreqString = array[0];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (!map[element]) {
      map[element] = 1;
    } else {
      map[element]++;
    }

    if (map[element] > maxFreq) {
      maxFreqString = element;
      maxFreq = map[element];
    }
  }

  return maxFreqString;
}

console.log(maxFrequency(arr)); // eew
