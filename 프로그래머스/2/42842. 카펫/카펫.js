function solution(brown, yellow) {
    const total = brown+yellow 
    
    return Array.from({ length: Math.sqrt(total) }, (_, i) => i + 1)
    .filter((v) => total % v === 0) 
    .map((v) => [total / v, v])
    .find(([w, h]) => yellow === (w - 2) * (h - 2))
}