/*
let inputData = require("fs")
  .readFileSync("./example/alarm.txt")
  .toString()
  .split(" ");
*/
const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .split(" ");

let hour = parseInt(inputData[0]);
let minute = parseInt(inputData[1]);

minute -= 45;

if (minute < 0) {
  minute += 60;
  hour--;

  if (hour == -1) hour = 23;
}

console.log(hour + " " + minute);
