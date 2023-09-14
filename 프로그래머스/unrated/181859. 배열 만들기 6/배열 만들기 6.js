function solution(arr) {
    let stk = [];
//     let i = 0;
    
//     while ( i < arr.length) {
//         if(stk.length === 0 || stk.length > 0 && stk[stk.length-1] !== arr[i]) {
//             stk = [...stk,arr[i]];
//             i++
//            }else if (stk.length > 0 && stk[stk.length-1] === arr[i]){
//                stk.pop();
//                i++
//            }
//     }
    // return stk.length > 0 ? stk : [-1]  
    
    
    for(let i = 0; i < arr.length; i++) {
        
    // if(stk.at(-1)!== arr[i]){
    //      stk = [...stk,arr[i]];
    // }
      // if(stk.length === 0 || stk.length > 0 && stk[stk.length-1] !== arr[i]) {
      // if(stk[stk.length-1] !== arr[i]) {
      //       stk = [...stk,arr[i]];
      // } else {
      //          stk.pop();
      //      }
    
    stk[stk.length-1] !== arr[i]?stk = [...stk,arr[i]]: stk.pop();
    }
      return stk.length > 0 ? stk : [-1]  

}






