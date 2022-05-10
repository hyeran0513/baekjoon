/*
const inputData = require("fs")
  .readFileSync("id.txt")
  .toString().trim();
*/

const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim();

console.log(`${inputData}??!`);
