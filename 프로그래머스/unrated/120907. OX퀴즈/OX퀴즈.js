function solution(quiz) {
    const splitA = quiz.map(v=>v.split('='))
    const splitB =splitA.map(v=>[v[0].split(' '),v[1]])
    const calc = splitB.map(([[a,op,b],c])=> op ==='+' ? +a + +b === +c: +a - +b === +c)
    return calc.map(v=>v?'O':'X')
    
   
}