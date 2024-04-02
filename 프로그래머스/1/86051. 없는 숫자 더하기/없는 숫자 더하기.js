function solution(numbers) {
    const numList = Array.from({length:10},(_,i)=>i)
   
    return (numList.filter(v=>!numbers.includes(v)).reduce((a,c)=>a+c,0))
}