/*
let inputData = require("fs")
  .readFileSync("./example/quadrant.txt")
  .toString()
  .split("\n");
*/
const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .split("\n");

const X = parseInt(inputData[0]);
const Y = parseInt(inputData[1]);

if (X > 0 && Y > 0) console.log("1");
else if (X < 0 && Y > 0) console.log("2");
else if (X < 0 && Y < 0) console.log("3");
else console.log("4");
