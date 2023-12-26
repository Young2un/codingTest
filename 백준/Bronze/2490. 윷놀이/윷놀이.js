const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString().trim()
  .split('\n')
  .map(v => v.split(' '));

const solution = input => {
  const yut = {
    4: 'E',
    0: 'D',
    1: 'C',
    2: 'B',
    3: 'A',
  };

  const arr = input.map(v => v.reduce((a, b) => a + +b, 0));
  return arr.map(v => yut[v]);
};

for (let i = 0; i < solution(input).length; i++) {
  console.log(solution(input)[i]);
}