function solution(numbers, k) {
    // const join= numbers.join('')
    // const arr = [...join.repeat(k)]
    // const result = arr.map(Number)
    // result.length=k*2
    // return result[result.length-2]
    const leng = Math.ceil(k*2 /numbers.length)
    let answer =numbers
    for(let i =0 ; i<leng;i++){
        answer=[...answer,...numbers]
    }return answer[k*2-2]
}