function solution(numLog) {
   let result = ''
    for(let i = 0; i < numLog.length - 1; i++){
        const key = numLog[i+1] - numLog[i] 
        result+= key === 1 ? 'w' : key === -1 ? 's':  key === 10 ? 'd':'a'
    }
    return result
}