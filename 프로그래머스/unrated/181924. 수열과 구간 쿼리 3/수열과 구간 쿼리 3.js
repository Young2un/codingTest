function solution(arr, queries) {
    
    let answer =[...arr]
    // arr.map((v,i)=>)

    for(let i=0; i< queries.length; i++){
            answer[queries[i][0]] =  arr[queries[i][1]]
            answer[queries[i][1]] =  arr[queries[i][0]]
            arr = [...answer]
            
        // console.log(arr)
    }
    return arr
}