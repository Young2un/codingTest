function solution(array, n) {
    const arrSort= array.sort((a,b)=> a-b)
  const gapIndex = arrSort.map((v,i)=>[Math.abs(v-n),i]).sort((a,b)=>a[0]-b[0])
    return arrSort[gapIndex[0][1]]
}