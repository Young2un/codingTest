function solution(n, slicer, num_list) {
    const [a,b,c] = slicer;
    const cutList = {
        1() {return num_list.slice(0,b+1)},
        2() {return num_list.slice(a)},
        3() {return num_list.slice(a,b+1)},
        4() {return num_list.slice(a,b+1).filter((_,i)=> i % c === 0)},
    }
   return cutList[n]()
}