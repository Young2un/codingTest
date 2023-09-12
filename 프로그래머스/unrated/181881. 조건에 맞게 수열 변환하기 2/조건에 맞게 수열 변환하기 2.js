function solution(arr) {
    let x = 0;
    let cur = arr;
    let acc = [];
    
   while (x >= 0){
        acc = cur.map(v=> {
        if(v >=50 && v % 2 ===0){
            return v/2
        }
        else if(v < 50 && v % 2){
            return (v*2)+1
        }else {
            return v
        }
     })   
       // if( acc.filter((v,i)=> v === cur[i]).length === cur.length) break
       if(acc.every((v,i)=>v===cur[i])) break
       
        x++
        cur = [...acc]
    }
    return x
   
    
    
 
        
   
}

