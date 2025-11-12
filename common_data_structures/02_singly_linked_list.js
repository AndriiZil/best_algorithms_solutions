'use strict';

/**
 * 	•	prepend (insert head): O(1)
 * 	•	append (if tail kept): O(1), без tail — O(n)
 * 	•	remove at position / find: O(n)
 *
 * 	Послідовність вузлів, кожен має значення і вказівник next. Добре для швидких вставок/видалень на початку або коли не потрібно випадковий доступ.
 */

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // optional for O(1) append
    this.length = 0;
  }

  prepend(value) {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
    if (!this.tail) this.tail = node;
    this.length++;
    return this;
  }

  append(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  find(value) {
    let cur = this.head;
    while (cur) {
      if (cur.value === value) return cur;
      cur = cur.next;
    }
    return null;
  }

  remove(value) {
    if (!this.head) return null;
    // remove head
    if (this.head.value === value) {
      const removed = this.head;
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      this.length--;
      return removed;
    }
    let prev = this.head;
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }
    if (prev.next) {
      const removed = prev.next;
      prev.next = removed.next;
      if (removed === this.tail) this.tail = prev;
      this.length--;
      return removed;
    }
    return null;
  }

  toArray() {
    const res = [];
    let cur = this.head;
    while (cur) {
      res.push(cur.value);
      cur = cur.next;
    }
    return res;
  }
}

const list = new SinglyLinkedList();
list.append(1).append(2).prepend(0);
console.log(list.toArray()); // [0,1,2]
list.remove(1);
console.log(list.toArray()); // [0,2]
