## VS code에서 자바 스크립트 디버그 걸어서 실행하는 방법

### VS code에 Code Runner 설치

> Extensions (Ctrl + Shift + X)
> Code Runner를 설치합니다.

### txt 파일 생성

> example.txt 생성

```
 1 2
```

### js 파일 생성

> index.js 생성

```
let inputData = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
```

### 터미널에 입력

> node index
