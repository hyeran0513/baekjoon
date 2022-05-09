/*
const inputData = require("fs")
  .readFileSync("./example/dice.txt")
  .toString()
  .split(" ");
*/
const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .split(" ");

let A = parseInt(inputData[0]);
let B = parseInt(inputData[1]);
let C = parseInt(inputData[2]);

const maxVal = Math.max(A, B, C);

if (A == B && B == C && C == A) {
  console.log(10000 + A * 1000);
}

if (A != B || B != C || C != A) {
  if (A == B || A == C) console.log(1000 + A * 100);
  if (B == C) console.log(1000 + B * 100);
}

if (A != B && B != C && C != A) {
  console.log(maxVal * 100);
}
