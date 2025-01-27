const alphabetObject = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 12,
  P: 11,
  Q: 10,
  R: 9,
  S: 8,
  T: 7,
  U: 6,
  V: 5,
  W: 4,
  X: 3,
  Y: 2,
  Z: 1,
};

function solution(name) {
    
  const alphabetSum = [...name].map(v=>alphabetObject[v]).reduce((a,c)=>a+c,0)
  let moveCount = name.length - 1; 
  
    // "ABAAAAAAAAABB"
    for (let i = 0; i < name.length; i++) {
        let next = i + 1;
       
        while (next < name.length && name[next] === 'A') {
            next++;
        }
        moveCount = Math.min(moveCount,i + name.length - next + Math.min(i, name.length - next)

    );
  }

  return alphabetSum + moveCount;
}