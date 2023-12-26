const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString().trim()
  .split('\n')
  .map(v => v.split(' '));

function solution(input) {
  const yut = {
    4: 'E',
    0: 'D',
    1: 'C',
    2: 'B',
    3: 'A',
  };

  const arr = input.map(v => v.reduce((a, b) => a + +b, 0));
  return arr.map(v => yut[v]).join('\n');
}

console.log(solution(input));