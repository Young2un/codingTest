function solution(s){
    const arr = [...s]
    let t = 0
    
    
    for(let i=0; i<arr.length; i++){
        if( arr[i] ==='('){
            t++
        }
         if( arr[i] ===')'){
            t--
        }
        if(t<0){
            return false
        }
    }
          return t === 0
}