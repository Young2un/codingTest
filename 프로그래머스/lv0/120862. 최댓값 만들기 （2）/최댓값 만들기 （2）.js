function solution(numbers) {
    const a = numbers.sort((a,b)=>a-b)
    return  Math.max(a[0]*a[1],a.at(-1)*a.at(-2)) 
}