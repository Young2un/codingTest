function solution(ineq, eq, n, m) {
    
    if(ineq===">" && eq ==="="){
       return +(n >= m)
    }
     if(ineq==="<" && eq ==="="){
       return +(n <= m)
    }
     if(ineq===">" && eq ==="!"){
       return +(n > m)
    }
     if(ineq==="<" && eq ==="!"){
       return +(n < m)
    }
    
    
    
    
    
    
    
}