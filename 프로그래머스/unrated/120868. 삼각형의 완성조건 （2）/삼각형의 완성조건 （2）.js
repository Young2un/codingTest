function solution(sides) {
    const [a,b] = sides.sort((a,b)=>a-b)
    const c = a+b
    const arr= Array.from({length:c},(_,i)=>i+1)
    const long = arr.filter(v=>b<v&& c>v).length
    const short = arr.filter(v=>b-a<v&& b>=v).length
    
    return short+long
}