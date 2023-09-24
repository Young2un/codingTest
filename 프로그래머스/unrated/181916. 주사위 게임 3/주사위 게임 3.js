function solution(a, b, c, d) {
    
    const dice = [a,b,c,d];
    const diceObj = dice.reduce((a,c)=>{
        a[c] = (a[c] || 0) + 1;
        return a
    },{})
    const diceArrSort = Object.entries(diceObj).sort((a, b) => b[1] - a[1])
    const [p,q,r,s] = diceArrSort.map(v => +v[0])
    
    if(diceArrSort.length === 1){
        return p*1111
    }
    if(diceArrSort.length === 2){
      return  dice.reduce((a,b) => a+b)/2 === p+q ? (p + q) * Math.abs(p - q) : (10 * p + q)**2  
    }
    if(diceArrSort.length === 3){
        return q * r
    }
    if(diceArrSort.length === 4){
        return Math.min(p,q,r,s)
    }

    
    
    
  
       // console.log(p,q,r,i)
    
    
//     const init = [a,b,c,d]
//     const initRe = init.reduce((a,b)=>a+b)
    
//       	const count =  init.reduce((acc,cur)=>{
//         acc[cur] = (acc[cur] || 0) + 1 ;
//         return acc
//     },{})
// 		// console.log(Object.entries(count).sort((a, b) => a[1] - b[1])) 
    
    
    
//     const arr = [...new Set(init)]
//     // const [p,q,r,i] = arr
    
//     if(arr.length===1){
//        return p*1111
//     }else if(arr.length ===2){
//        if(initRe/2 === arr.reduce((a,b)=>a+b)){
//          return (p + q) * Math.abs(p - q)
//        }else{
//          return (10 * p + q)**2  
//        }
//     }else if(arr.length === 4){
//         const arr2 = arr.sort((a,b)=>a-b)
//         return arr2[0]
//     }else{
//         return q * r
//     }
    
}