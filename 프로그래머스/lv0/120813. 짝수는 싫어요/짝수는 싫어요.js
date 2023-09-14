function solution(n) {
    // let answer =[]
    // for(let i = 0; i <= n; i++){
    //     if(i%2){
    //         answer=[...answer, i]
    //     }
    // }return answer
    
   return Array.from({length : n+1},(_,i)=>i).filter(v=>v%2)
}