/*
const [A, B] = require("fs")
  .readFileSync("mul.txt")
  .toString()
  .split("\n");
*/
const fs = require("fs");
const [A, B] = fs
  .readFileSync(0, "utf8")
  .toString()
  .split("\n");

const [B0, B1, B2] = B.split("");

const cal1 = A * B2;
const cal2 = A * B1;
const cal3 = A * B0;
const sum =
  cal1 + parseInt(cal2 * 10) + parseInt(cal3 * 100);

console.log(cal1);
console.log(cal2);
console.log(cal3);
console.log(sum);
