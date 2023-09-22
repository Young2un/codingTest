function solution(arr, queries) {
//     let arr2=[];
//     let result ;
    
//     queries.forEach(v=>{
//        const [s,e,k] = v;        
//        arr2 =[...arr2, arr.slice(s,e+1)]
//         console.log(arr2)
        
//         const arr3 = arr2.map(v=>[...v].sort((a,b)=>a+b))
//        // const arr3 = arr2.map(v=>v.filter(o=>o>k))
//         // console.log(arr2)
//        // const arr3 = arr2.map(v=>v.filter(o => o > k ))
       
//        console.log(arr3)
//        // result =  arr3.map(v=> v === Infinity ? -1:v)
        
//     })
//     // return result
    
    
    
//     queries.forEach()
    
    
//      queries.map(([s,e,k]) => {
         
//      })
    let result =[]
    queries.forEach(v=>{
        let arr2 = [];
        const [s,e,k] = v;
        arr2 = [...arr2, ...arr.slice(s,e+1)]
        // console.log(arr2)
        const arr3 = Math.min(...arr2.filter(o=>o>k))
        // 한바퀴 돌때마다 새로 실행컨텍스트가 생긴다
        result = [...result, arr3 === Infinity ? -1 :arr3]
        // console.log(result)
      })
    
    return result
}