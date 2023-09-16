function solution(rank, attendance) {
      const [a,b,c]= rank.filter((v,i)=> attendance[i]).sort((a,b)=>a-b)
      const index = (x) =>  rank.indexOf(x)

      return (10000 * index(a)) + (100 * index(b)) +index(c)
    
    
    
    
    
    // let num = []
//     for(let i = 0; i < rank.length; i++){
//         for(let j=0; j< 3; j++){
//             if(rank[i] === possible[j]){
//                  num.push(i)
//                 console.log(rank[i])
//             }
//         }
    // }     
      // console.log(num)
    

    // const [a,b,c] = num;
     
//     console.log(a,b,c)
    
//          let a = 0
//          let answer = []
   
//     for( let i = 0; i < rank.length; i++){
//         if(attendance[i]){
//             answer =[...answer,[rank[i],i]] 
//            }
//         }
    
//     answer.
    
}