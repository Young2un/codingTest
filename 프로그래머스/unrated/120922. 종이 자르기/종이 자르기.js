function solution(M, N) {
    const min = M < N ? M : N
    
    const max = M > N ? M : N
    console.log(min-1,max)
    
    return (min-1) + ((max-1) * min)
    
    
}