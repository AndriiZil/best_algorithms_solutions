"use strict";

function fibonacci(n) {
  const seq = [1, 1];

  console.time("Compute time");

  if (seq.length < 2) {
    return console.log(seq.slice(0, n));
  }

  while (seq.length < n) {
    const last = seq[seq.length - 1];
    const prev = seq[seq.length - 2];

    seq.push(last + prev);
  }

  console.timeEnd("Compute time");

  return console.log(seq);
}

fibonacci(125);

const fibonacciMemo = (function () {
  const seq = [1, 1];

  return function (n) {
    console.time("Compute FiboMemo:");

    if (seq.length >= n) {
      console.log("No Compute");
      console.timeEnd("Compute FiboMemo:");
      return console.log(seq.slice(0, n));
    }

    while (seq.length < n) {
      const last = seq[seq.length - 1];
      const prev = seq[seq.length - 2];

      seq.push(last + prev);
      console.log("Pushed:", last);
    }

    console.timeEnd("Compute FiboMemo:");

    return console.log(seq);
  };
})();

fibonacciMemo(125);
