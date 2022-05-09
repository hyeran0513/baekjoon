/*
let inputData = require("fs")
  .readFileSync("./example/year.txt")
  .toString();
*/
const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString();

const year = parseInt(inputData);

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("1");
} else {
  console.log("0");
}
