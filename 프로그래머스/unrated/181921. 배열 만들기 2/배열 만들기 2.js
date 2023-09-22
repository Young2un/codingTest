function solution(l, r) {
    let answer =[]; 
    for(let i = l; i <= r ;i++){
        const k = i.toString()
        if([...k].filter(v=>v==='0'||v==='5').length === k.length){
            answer =[...answer,i]
        }
        // if(!(k.includes('1'))&& !(k.includes('2'))&&!(k.includes('3'))&&!(k.includes('4'))&&!(k.includes('6'))&&!(k.includes('7'))&&!(k.includes('8'))&&!(k.includes('9'))){
        //     answer =[...answer , i]
        // }
    }
   return answer.length === 0 ? [-1] : answer
}