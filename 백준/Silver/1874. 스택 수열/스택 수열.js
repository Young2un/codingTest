const fs = require('fs');

// 'test.txt' 파일에서 입력을 읽음
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const cases = parseInt(input[0]); // 테스트 케이스의 수를 파싱
const arr = Array.from({ length: cases }, (_, i) => i + 1); // 1부터 cases까지의 값을 갖는 배열 초기화
const stack = [];
let answer = '';

for (let j = 1; j <= cases; j++) {
  let count = 1;

  // 스택 작업을 시뮬레이트
  while (count <= cases && (stack.length === 0 || stack[stack.length - 1] !== parseInt(input[j]))) {
    stack.push(arr.shift());
    answer += '+\n';
    count++;
  }

  // 현재 요소가 스택의 맨 위와 일치하는지 확인
  if (stack[stack.length - 1] === parseInt(input[j])) {
    stack.pop();
    answer += '-\n';
  } else {
    answer = 'NO';
    break;
  }
}

console.log(answer);
