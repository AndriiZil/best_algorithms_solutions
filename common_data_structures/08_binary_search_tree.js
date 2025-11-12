'use strict';

/**
 * BST: для кожного вузла left.val <= node.val <= right.val (або строга порядковість).
 * Операції: insert, find, delete — середнє O(log n) якщо дерево збалансоване, в гіршому O(n).
 *
 * AVL, Red-Black — гарантують O(log n). Реалізації довші — але принцип: поворот (rotate), баланс-фактор.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
      return;
    }
    let cur = this.root;
    while (true) {
      if (val < cur.val) {
        if (!cur.left) {
          cur.left = node;
          break;
        }
        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = node;
          break;
        }
        cur = cur.right;
      }
    }
  }

  find(val) {
    let cur = this.root;
    while (cur && cur.val !== val) {
      cur = val < cur.val ? cur.left : cur.right;
    }
    return cur;
  }

  // In-order traversal (sorted)
  inorder(node = this.root, res = []) {
    if (!node) return res;
    this.inorder(node.left, res);
    res.push(node.val);
    this.inorder(node.right, res);
    return res;
  }
}
