function solution(array) {
   const arr = array.reduce((a,c)=>{
        a[c] = (a[c] || 0) + 1;
        return a
    },{})
   const arrSort = Object.entries(arr).sort((a, b) => b[1] - a[1])
   console.log(arrSort[0][1])
    
    // console.log(arrSort.map(v=>v[1]))
   return arrSort.length > 1 && arrSort[0][1] === arrSort[1][1] ? -1 : +arrSort[0][0]
}