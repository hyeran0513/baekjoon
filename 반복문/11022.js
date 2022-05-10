const inputData = require("fs")
  .readFileSync("./example/add.txt")
  .toString()
  .split("\n");
/*
let inputData = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
*/
for (let i = 1; i <= inputData[0]; i++) {
  let num = inputData[i].split(" ");

  console.log(
    `Case #${i}: ${Number(num[0])} + ${Number(num[1])} = ${
      Number(num[0]) + Number(num[1])
    }`
  );
}
