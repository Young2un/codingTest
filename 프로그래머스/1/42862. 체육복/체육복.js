function solution(n, lost, reserve) {
  
    // 도난당하고 여분이 있는 애들 빼고 여분이 있는애
    // lost가 [5,3] reserve가 [4,6]
    const arr =reserve.filter(v=> !lost.includes(v))
    const newLost = lost.sort((a,b)=>a-b).filter(v=> !reserve.includes(v))
    
    let count = n-newLost.length;
    
    console.log(arr, newLost)
    for(let i =0; i<newLost.length;i++){
        const preIndex = arr.indexOf(newLost[i] -1)
        const nextIndex = arr.indexOf(newLost[i] +1)
 
        if(preIndex !== -1){
            arr.splice(preIndex,1)
            count ++
            continue; 
           }
           if(nextIndex !== -1){
               arr.splice(nextIndex,1)
               count ++
           }
     
   }
     return count
}