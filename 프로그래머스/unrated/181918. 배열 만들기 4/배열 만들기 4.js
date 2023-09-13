function solution(arr) {
    var stk = [];
    
    for(let i = 0; i < arr.length; ){
        if ((stk.length === 0) ||(stk[stk.length-1] < arr[i])){
            stk = [...stk, arr[i]]
            i++
        } else {
           stk.length -= 1 
        } 
    }
        return stk
    
    // let i = 0;
    // while (i < arr.length){
    //      if ((stk.length === 0) ||(stk[stk.length-1] < arr[i])){
    //         stk = [...stk, arr[i]]
    //          i++
    //     } else {
    //        stk.length -= 1 
    //     } 
    // }
    // return stk
    
}