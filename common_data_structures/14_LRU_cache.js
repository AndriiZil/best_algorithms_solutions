'use strict';

/**
 * Забезпечує O(1) get та put зі збереженням останнього використання.
 */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key -> node
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  _removeNode(node) {
    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;
    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev;
  }
  _addToHead(node) {
    node.next = this.head;
    node.prev = null;
    if (this.head) this.head.prev = node;
    this.head = node;
    if (!this.tail) this.tail = node;
  }
  get(key) {
    const node = this.map.get(key);
    if (!node) return -1;
    this._removeNode(node);
    this._addToHead(node);
    return node.value;
  }
  put(key, value) {
    let node = this.map.get(key);
    if (node) {
      node.value = value;
      this._removeNode(node);
      this._addToHead(node);
    } else {
      node = { key, value, prev: null, next: null };
      this.map.set(key, node);
      this._addToHead(node);
      this.size++;
      if (this.size > this.capacity) {
        const tail = this.tail;
        this._removeNode(tail);
        this.map.delete(tail.key);
        this.size--;
      }
    }
  }
}
