function solution(sizes) {
    const w = sizes.map(([a,b])=> a>b?a:b)
    const h = sizes.map(([a,b])=>a>b?b:a)
    return Math.max(...w)* Math.max(...h)
}