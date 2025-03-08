'use strict';

const fruits = ['fig', 'lemon', 'lime', 'orange'];

function linearTime(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    console.info(fruits[i]);
  }
}

linearTime(fruits); // O(n) ---> Linear Time
