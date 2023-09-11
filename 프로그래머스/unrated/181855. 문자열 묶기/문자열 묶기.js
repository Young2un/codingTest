function solution(strArr) {
    
  // const length = strArr.map(v=>v.length).sort((a,b)=>a-b)
  //   const count = length.reduce((a,c)=>{
  //       a[c]=(a[c]||0)+1;
  //       return a
  //   })
    
    
   const count =  strArr.map(v=>v.length).reduce((a,c)=>{
        a[c] = (a[c] || 0) +1 ;
        return a
    },{})
   
   // console.log(count)
    // const Max =
      return Math.max(...Object.values(count))   
    
    // return Max.reduce((a,c)=> a > c ? a : c ,0)
    
        
}