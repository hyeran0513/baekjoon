const N = require("fs")
  .readFileSync("./example/writeN.txt")
  .toString();

/*
let N = require("fs")
  .readFileSync("/dev/stdin")
  .toString();
*/

for (let i = 0; i < N; i++) {
  let star = "";
  for (let j = N - 1; j >= 0; j--) {
    star += j <= i ? "*" : " ";
  }
  console.log(star);
}
