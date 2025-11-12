'use strict';

/**
 * Дозволяє виконувати оновлення і діапазонні запити (sum, min, max) за O(log n). Реалізація — дерево у масиві.
 */

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(this.n * 4);
    this._build(arr, 1, 0, this.n - 1);
  }

  _build(arr, idx, l, r) {
    if (l === r) {
      this.tree[idx] = arr[l];
      return;
    }
    const mid = Math.floor((l + r) / 2);
    this._build(arr, idx * 2, l, mid);
    this._build(arr, idx * 2 + 1, mid + 1, r);
    this.tree[idx] = this.tree[idx * 2] + this.tree[idx * 2 + 1];
  }

  query(qL, qR) {
    return this._query(1, 0, this.n - 1, qL, qR);
  }
  _query(idx, l, r, qL, qR) {
    if (qL > r || qR < l) return 0;
    if (qL <= l && r <= qR) return this.tree[idx];
    const mid = Math.floor((l + r) / 2);
    return (
      this._query(idx * 2, l, mid, qL, qR) +
      this._query(idx * 2 + 1, mid + 1, r, qL, qR)
    );
  }

  update(pos, val) {
    this._update(1, 0, this.n - 1, pos, val);
  }
  _update(idx, l, r, pos, val) {
    if (l === r) {
      this.tree[idx] = val;
      return;
    }
    const mid = Math.floor((l + r) / 2);
    if (pos <= mid) this._update(idx * 2, l, mid, pos, val);
    else this._update(idx * 2 + 1, mid + 1, r, pos, val);
    this.tree[idx] = this.tree[idx * 2] + this.tree[idx * 2 + 1];
  }
}
