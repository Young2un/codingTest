function solution(myStr) {

    const a = myStr.split('a').map(v=>v.split('b')).flat().map(v=>v.split('c')).flat().filter(v=>v);
 // const a = myStr.split('a').join(' ').split('b').join(' ').split('c').join(' ').split(' ').filter(v=>v);
 return  a.length ? a : ["EMPTY"];
    
}