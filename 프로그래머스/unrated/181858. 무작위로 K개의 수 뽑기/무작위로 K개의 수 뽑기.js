function solution(arr, k) {
    const set = [...new Set(arr)]
    
    if(set.length >= k){
        set.length = k
    }else {
       const index = set.length -k
       set.length = k
       set.fill(-1,index)
    }
    return set
}