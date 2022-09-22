'use strict';

const pause = (ms) => new Promise(r => setTimeout(r, ms));

const fn = async () => {
  await pause(500);
  console.log('finish');
}

fn();
