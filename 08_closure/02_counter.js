'use strict';

/**
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 *
 * The three functions are:
 *
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 *
 *
 *
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 *
 */

function createCounter(init) {
  let initValue = init;
  let value = init;

  return {
    increment() {
      value += 1;
      return value;
    },
    decrement() {
      value -= 1;
      return value;
    },
    reset() {
      value = initValue;
      return value;
    }
  }
}

const counter = createCounter(0);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
console.log(counter.reset()); // 0