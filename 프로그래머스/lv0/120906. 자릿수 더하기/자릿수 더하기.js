function solution(n) {
    // const str= n+''
    // console.log(str)
   return [...n+''].reduce((a,c)=>a + +c,0)
}