function solution(citations) {
    
    const sortArr = citations.sort((a,b)=>b-a)
    console.log(sortArr)


    for(let i=0; i<citations.length; i++){
        const h = i + 1;
        if(sortArr[i] < h){
            return i
        }
    }
    return citations.length;
    
}