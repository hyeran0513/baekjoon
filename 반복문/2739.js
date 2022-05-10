/*
const fs = require("fs");
const inputData = fs
  .readFileSync("./example/gogodan.txt")
  .toString()
  .trim();
*/
const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim();

for (let i = 1; i < 10; i++) {
  console.log(`${inputData} * ${i} = ${inputData * i}`);
}
