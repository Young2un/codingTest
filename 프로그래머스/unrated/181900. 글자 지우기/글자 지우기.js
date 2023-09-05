function solution(my_string, indices) {
//     let answer ='';
//     for(let i = 0; i < indices.length ; i++){
//       if(my_string[i]!==my_string[indices[i]])
//     console.log(my_string[i])
//     }
//     return answer
    
    
   // console.log(indices.filter((v,i)) 
// return   [...my_string].filter((v,i)=> !v[indices[i]])
    
 // return   [...my_string].filter((v,i)=>i===!indices)
    
    
    // for(let i = 0; i < my_string.length; i++){
    //       for(let j = 0; j < my_string.length; j++){
    //     if(i === indices[j]){
    //         console.log(my_string[i])
    //     }
    // }
    // }
   //  indices.sort((a,b)=>a-b)
   // // console.log() 
   //  console.log(indices)
   //  let answer = ''
   //  for(let i= 0; i<my_string.length; i++){
   //      for(let j = 0; j <my_string.length;j++)
   //      if(my_string[i]!==indices[j]){
   //          answer += my_string[i]
   //      }
   //  }
    // return answer
    
    
    // console.log(indices.includes(i))
    
    
    
  return  [...my_string].filter((_,i)=>!indices.includes(i)).join('')
    
}