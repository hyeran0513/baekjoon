/*
const N = Number(
  require("fs")
    .readFileSync("./example/writeN.txt")
    .toString()
);
*/
const N = Number(
  require("fs").readFileSync("/dev/stdin").toString()
);

let result = "";

for (let i = N; i >= 1; i--) result += i + "\n";

console.log(result);
