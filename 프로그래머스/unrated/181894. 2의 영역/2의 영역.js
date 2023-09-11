function solution(arr) {
//    const count = arr.filter (v=> v===2).length

//    if (count >= 1) {
//        return arr.slice(arr.indexOf(2),arr.lastIndexOf(2)+1)
//     }else {
//         return [-1]
//     }
    
    // if(arr.includes(2)){
    //    return arr.slice(arr.indexOf(2),arr.lastIndexOf(2)+1)
    // }else {
    //     return [-1]
    // }
    
    return arr.includes(2) ? arr.slice(arr.indexOf(2),arr.lastIndexOf(2)+1) : [-1]
    
     // const result =
     // return result.length ?  result : [-1]
   
    // return arr
}