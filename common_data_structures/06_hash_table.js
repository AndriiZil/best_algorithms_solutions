'use strict';

/**
 * Ключ → значення, середня складність O(1). У JS для надійних ключів (не лише строки) використовуємо Map.
 */

const map = new Map();

map.set('a', 1);
map.set(1, 'number key');

console.log(map.get('a')); // 1
map.delete('a');

/**
 * Realization
 */

class SimpleHashMap {
  constructor(size = 16) {
    this.buckets = Array.from({ length: size }, () => []);
  }
  _hash(key) {
    const s = String(key);
    let h = 0;
    for (let i = 0; i < s.length; i++) {
      h = (h * 31 + s.charCodeAt(i)) >>> 0;
    }
    return h % this.buckets.length;
  }
  set(key, value) {
    const i = this._hash(key);
    const bucket = this.buckets[i];
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }
  get(key) {
    const i = this._hash(key);
    for (const pair of this.buckets[i]) {
      if (pair[0] === key) return pair[1];
    }
    return undefined;
  }
}
