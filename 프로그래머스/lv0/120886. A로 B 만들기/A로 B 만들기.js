function solution(before, after) {
  return +([...before].sort().join('') === [...after].sort().join(''))
    // console.log([...before].sort(),[...after].sort())
    
}