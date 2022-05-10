/*
const inputData = require("fs")
  .readFileSync("year.txt")
  .toString().trim();
*/

const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim();

console.log(inputData - 543);
