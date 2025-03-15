'use strict';

const strings = ['a', 'b', 'c', 'd']; // 4*4 = 16 bytes of storage

strings.push('e'); // O(1);

const e = strings.pop(); // O(1)

console.log(e); // e

strings.unshift('x'); // O(n)

strings.splice(2, 0, 'alien'); // O(n/2) => O(n)

console.log(strings); // [ 'x', 'a', 'b', 'c', 'd' ]
