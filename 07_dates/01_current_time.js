'use strict';

function getCurrentTime() {
  return new Date().toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

console.log(getCurrentTime()); // 15:15:22
