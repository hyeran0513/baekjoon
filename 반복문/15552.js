/*
const fs = require("fs");
const inputData = fs
  .readFileSync("./example/add.txt")
  .toString()
  .split("\n");
*/
const fs = require("fs");
const inputData = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let result = "";

for (let i = 1; i <= inputData[0]; i++) {
  let num = inputData[i].split(" ");
  result += parseInt(num[0]) + parseInt(num[1]) + "\n";
}

console.log(result);
