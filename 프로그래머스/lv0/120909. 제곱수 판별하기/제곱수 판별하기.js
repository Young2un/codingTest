function solution(n) {
    let result  = 0
    for(let i = 2 ; i < n ; i++ ){
       if(n/i === i){
           result += i
       }
    }
    return result ? 1 : 2
}