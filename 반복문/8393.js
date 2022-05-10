/*
const fs = require("fs");
const n = fs
  .readFileSync("./example/sum.txt")
  .toString()
  .trim();
*/
const fs = require("fs");
const n = fs.readFileSync(0, "utf-8").toString().trim();

let sum = 0;

for (let i = 1; i <= n; i++) sum += i;

console.log(sum);
