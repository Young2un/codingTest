function solution(numbers) {
    const str = numbers.map(v=>v+'')
    
    const sort= str.sort((a,b)=> {
        if (a+b < b+a) {
            return 1;
         }
        if (a+b > b+a) {
            return -1;
         }

        return 0;
    
    })

    if(sort[0]==0){
        return "0"
    }
    
    return sort.join("")
    
}