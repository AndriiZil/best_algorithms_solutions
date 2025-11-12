'use strict';

/**
 * Push O(1)
 * Dequeue O(n) because shift(), Better: implement ring buffer or linked-list to get O(1) dequeue
 *
 * Підтримує push/pop з обох кінців. Реалізується як двосторонній список або кільцевий буфер.
 */

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }
}

/**
 * Dequeue O(1)
 */

class RingQueue {
  constructor(cap = 16) {
    this.arr = new Array(cap);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }
  enqueue(x) {
    if (this.size === this.arr.length) this._grow();
    this.arr[this.tail] = x;
    this.tail = (this.tail + 1) % this.arr.length;
    this.size++;
  }
  dequeue() {
    if (this.size === 0) return undefined;
    const val = this.arr[this.head];
    this.head = (this.head + 1) % this.arr.length;
    this.size--;
    return val;
  }
  _grow() {
    const newArr = new Array(this.arr.length * 2);
    for (let i = 0; i < this.size; i++) {
      newArr[i] = this.arr[(this.head + i) % this.arr.length];
    }
    this.arr = newArr;
    this.head = 0;
    this.tail = this.size;
  }
}
