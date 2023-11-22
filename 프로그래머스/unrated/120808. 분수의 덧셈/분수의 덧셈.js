function solution(numer1, denom1, numer2, denom2) {
    const demo = denom1*denom2
    const numer = numer1*denom2 +numer2*denom1
    let a =0
    for(let i=1; i<=demo;i++){
        if(demo%i===0 && numer%i===0){
          a=i
        }
    }
    return [numer/a,demo/a]
}