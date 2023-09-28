function solution(cipher, code) {
    // var answer = '';
    return [...cipher].filter((_,i)=> i%code===0).join('');
}