'use strict';

/**
 * Повний бінарний дерево, збережений в масиві. Для min-heap найменший елемент в корені. Використовується для priority queue.
 *
 * 	•	insert: O(log n)
 * 	•	extractMin/extractMax: O(log n)
 * 	•	peek: O(1)
 */

/**
 * (Min-Heap)
 */

class MinHeap {
  constructor() {
    this.data = [];
  }
  _parent(i) {
    return Math.floor((i - 1) / 2);
  }
  _left(i) {
    return 2 * i + 1;
  }
  _right(i) {
    return 2 * i + 2;
  }

  push(val) {
    this.data.push(val);
    this._siftUp(this.data.length - 1);
  }
  _siftUp(i) {
    while (i > 0) {
      const p = this._parent(i);
      if (this.data[p] <= this.data[i]) break;
      [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
      i = p;
    }
  }
  pop() {
    if (this.data.length === 0) return undefined;
    const res = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this._siftDown(0);
    }
    return res;
  }
  _siftDown(i) {
    const n = this.data.length;
    while (true) {
      const l = this._left(i),
        r = this._right(i);
      let smallest = i;
      if (l < n && this.data[l] < this.data[smallest]) smallest = l;
      if (r < n && this.data[r] < this.data[smallest]) smallest = r;
      if (smallest === i) break;
      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      i = smallest;
    }
  }
  peek() {
    return this.data[0];
  }
}
