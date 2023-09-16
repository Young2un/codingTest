function solution(my_string, queries) {
        let answer = [...my_string]
    
    for(let i = 0; i < queries.length; i++){
        
        const [s,e] = queries[i];
        const first = answer.slice(0,s)
        const sec = answer.slice(s,e+1).reverse()
        const third = answer.slice(e+1)
        const result = [...first,...sec,...third]
        answer = [...result]
    }
    return answer.join("")
}