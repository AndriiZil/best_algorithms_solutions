"use strict";

const dayDiff = (start, end) =>
  Math.ceil(Math.abs(start.getTime() - end.getTime()) / 86400000);

console.log(dayDiff(new Date("2024-01-24"), new Date("2024-01-20"))); // 4
