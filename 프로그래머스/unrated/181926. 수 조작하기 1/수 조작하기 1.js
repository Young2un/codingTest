function solution(n, control) {
  return n + [...control].map(v=> v === 'w'? 1 : v==='s'? -1: v==='d'? 10 :-10).reduce((a,c)=>a+c)
} 