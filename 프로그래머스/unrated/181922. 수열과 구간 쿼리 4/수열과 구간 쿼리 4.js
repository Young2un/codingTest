function solution(arr, queries) {
    
    // for(let i = 0; i<arr.length; i++){
    //     for(let j = 0; j<queries.length; j++){
    //        (arr[i] >= queries[j][0]) && (arr[i] <= queries[j][1]) &&(queries[j][2]%arr[i] ===0) ? arr[i]+1:arr[i]
    //         console.log(arr)
    // }   }
    // return arr
    
    
    
    
//     arr.map((v)=> {
//         for(let j =0 ; j<queries.length;j++){
//      return (v >= queries[j][0]) && (v <= queries[j][1]) &&( v%queries[j][2] ===0) ? v+1:v
      
//         } 
//         }
//     )
     //  for(let i = 0; i<arr.length; i++){
     //     for(let j = 0; j<queries.length; j++){
     //         if(i <= queries[j][1] && i>= queries[j][0] && i% queries[j][2] === 0){
     //             arr[i]+=1
     //         }
     //      } 
     //  }
     // return arr
    
    //디스트럭처링 할당
  
    // for(let i =0; i < queries.length; i++ ){
    //     const [s, e, k] = queries[i]
    //     for(let j = s; j <= e; j++){
    //         if( j % k === 0 ){
    //             arr[j]+=1;
    //         }
    //     }
    // }
    // return arr
    
    
    //forEach
    queries.forEach(v=>{
        //디스트럭처링 할당
        const [s, e, k] = v;
        
         for(let j = s; j <= e; j++){
            if( j % k === 0 ){
                arr[j]+=1;
            }}})
    
         
   return arr 
   
    
}