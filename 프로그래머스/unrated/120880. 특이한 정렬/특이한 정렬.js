function solution(numlist, n) {
    const sortNumlist = numlist.sort((a,b)=>b-a)
   const gap = sortNumlist.map((v)=>[v,Math.abs(v-n)])    
    const sortGap = gap.sort((a,b)=>a[1]-b[1])
    return sortGap.map(v=>v[0])
    
    
}