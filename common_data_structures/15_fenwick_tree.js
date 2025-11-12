'use strict';

class Fenwick {
  constructor(n) {
    this.n = n;
    this.bit = new Array(n + 1).fill(0);
  }
  add(idx, val) {
    // idx: 1-based
    for (let i = idx; i <= this.n; i += i & -i) this.bit[i] += val;
  }
  sum(idx) {
    let res = 0;
    for (let i = idx; i > 0; i -= i & -i) res += this.bit[i];
    return res;
  }
}
