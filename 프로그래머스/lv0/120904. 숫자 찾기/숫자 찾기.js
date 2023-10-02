function solution(num, k) {
    const result = [...num+''].indexOf(k+'')
    return result === -1 ? result : result +1
}