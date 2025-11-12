'use strict';

/**
 * Дерево для рядків — швидкий пошук префіксів (autocomplete, dictionary). Insert/search O(L) де L — довжина слова.
 */

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let cur = this.root;
    for (const ch of word) {
      if (!cur.children.has(ch)) cur.children.set(ch, new TrieNode());
      cur = cur.children.get(ch);
    }
    cur.isEnd = true;
  }

  search(word) {
    let cur = this.root;
    for (const ch of word) {
      if (!cur.children.has(ch)) return false;
      cur = cur.children.get(ch);
    }
    return cur.isEnd;
  }

  startsWith(prefix) {
    let cur = this.root;
    for (const ch of prefix) {
      if (!cur.children.has(ch)) return false;
      cur = cur.children.get(ch);
    }
    return true;
  }
}
