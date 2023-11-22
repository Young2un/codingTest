function solution(num_list) {
//     let even =0;
//     let odd =0;
//     for(let i=0 ; i < num_list.length ; i=i+2){
//         even = even + num_list[i]
//     }
    
//     for(let i=1 ; i < num_list.length ; i=i+2){
//         odd = odd + num_list[i]
//     }
    
//     return Math.max(even,odd)
    
//     const even = num_list.filter((v,i)=> i % 2 === 1).reduce((a,c)=>a+c)
//     const odd = num_list.filter((v,i)=> i % 2 === 0).reduce((a,c)=>a+c)
//     console.log(even >= odd ? even : odd)
  
    const even = num_list.reduce((acc,cur,i)=>i % 2 === 1 ? acc + cur : acc, 0)
    const odd = num_list.reduce((acc,cur,i)=>i % 2 === 0 ? acc + cur : acc, 0)
    
    // console.log(even,odd) 
    
    return Math.max(even,odd)

}