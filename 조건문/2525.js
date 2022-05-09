/*
const inputData = require("fs")
  .readFileSync("./example/oven.txt")
  .toString()
  .split("\n");
*/
const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .split("\n");

let hour = parseInt(inputData[0].split(" ")[0]);
let minute = parseInt(inputData[0].split(" ")[1]);
let cookTime = parseInt(inputData[1]);

minute += cookTime;

while (minute >= 60) {
  minute -= 60;
  hour++;
}

hour %= 24;

console.log(hour + " " + minute);
