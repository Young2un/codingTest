function solution(array, commands) {
   const arr = commands.map(([i,j,k])=>array.slice(i-1,j).sort((a,b)=>a-b).slice(k-1,k))
return arr.flat()
}