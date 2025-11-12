'use strict';

/**
 * Last In First Out
 * push/pop O(1)
 */

class Stack {
  constructor() {
    this.data = [];
  }

  push(x) {
    this.data.push(x);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}
