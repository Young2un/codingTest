function solution(brown, yellow) {
    const total = brown+yellow 
    
    // 전체 갯수에서 약수를 구한다.
    // t = w * h 
    // y = (w-2) * (h-2)
    // b = t - y

    // b = t - (w-2) * (h-2)
  const divisors = Array.from({ length: Math.sqrt(total) }, (_, i) => i + 1)
    .filter((v) => total % v === 0) 
    .map((v) => [total / v, v]);
    
    return divisors.filter(([w,h])=> yellow === ((w-2)*(h-2))).flat()
}