'use strict';

const pause = (ms) => new Promise((r) => setTimeout(r, ms));

const fn = async () => {
  console.log('before pause...');
  await pause(1000);
  console.log('after pause...');
};

fn().catch(console.error);
