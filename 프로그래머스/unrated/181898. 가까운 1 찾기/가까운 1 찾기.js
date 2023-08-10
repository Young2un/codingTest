function solution(arr, idx) {
    // let answer=[]
    // for(let i = idx; i< arr.length; i++){
    //     if(i>=idx) {
    //         answer = [...answer,0]
    //         console.log(answer)
    //     }else{
    //         answer= [...answer,1]
    //     }
    // }         
    // return answer.indexOf(1)
    
    
    
    
//     for(let i = idx; i< arr.length; i++){
//         if(arr[i] === 1) {
//             return i
//         }
//     }  return -1
    
 // return arr.map((v,i)=>i < idx ? v = 0 : v).indexOf(1)
    
    return arr.indexOf(1,idx)
    
    
    
    
    
}