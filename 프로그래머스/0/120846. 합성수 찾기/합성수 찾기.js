function solution(n) {
    let answer =[]
    const numList= Array.from({length: n}, (v, i) => i+1)
    const resultList =  numList.map(num => {
        let result =[];
        let index=1
        while (index <= Math.sqrt(num)) {
            if (num % index === 0) {
            result.push(index)
            if (num / index !== index) result.push(num / index)
        }
            index++
    }
        return result
    })
        return resultList.filter(v=>v.length>=3).length
}