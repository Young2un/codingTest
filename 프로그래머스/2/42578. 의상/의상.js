function solution(clothes) {
    const count = clothes.reduce((acc,[_,category])=>{
        acc[category] = (acc[category]||1)+1;
        return acc
    },{})
    
    return sum = Object.values(count).reduce((a,c)=>a*c,1)-1
}
