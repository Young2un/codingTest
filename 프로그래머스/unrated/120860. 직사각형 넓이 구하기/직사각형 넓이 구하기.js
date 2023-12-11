function solution(dots) {
    const map = dots.map(v=>v[0])
    const map1 = dots.map(v=>v[1])
    const maxMin = (arr) => {
        const a = Math.max(...arr)
        const b = Math.min(...arr)
        return Math.abs(a-b)
    }
    return maxMin(map)*maxMin(map1)
}

