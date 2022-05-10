/*
const N = require("fs")
  .readFileSync("./example/writeN.txt")
  .toString();
*/

let N = require("fs").readFileSync("/dev/stdin").toString();

let star = "";

for (let i = 0; i < N; i++) {
  star += "*";
  console.log(star);
}
