/*
const fs = require("fs");
const inputData = fs
  .readFileSync("./example/add.txt")
  .toString()
  .split("\n");
*/
const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n");

for (let i = 0; i < inputData[0]; i++) {
  const A = parseInt(inputData[i + 1].split(" ")[0]);
  const B = parseInt(inputData[i + 1].split(" ")[1]);

  console.log(A + B);
}
