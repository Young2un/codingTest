function solution(brown, yellow) {
    const total = brown+yellow 
    
    // 전체 갯수에서 약수를 구한다.
    
    // y = (가로-2) * (세로-2)
    // b = 가로 *세로  - y
    
    // b = 가로 *세로 - (가로-2) * (세로-2)
  const divisors = Array.from({ length: Math.sqrt(total) }, (_, i) => i + 1)
    .filter((v) => total % v === 0) 
    .map((v) => [total / v, v]);

    
    return divisors.filter(([w,h])=> brown === w*h -((w-2)*(h-2))).flat()
}