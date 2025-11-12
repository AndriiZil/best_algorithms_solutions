'use strict';

/**
 * JS Set — унікальні значення. Операції: add, delete, has — амортизовано O(1).
 */

const s = new Set([1, 2, 3]);

s.add(4);
s.has(2); // true
