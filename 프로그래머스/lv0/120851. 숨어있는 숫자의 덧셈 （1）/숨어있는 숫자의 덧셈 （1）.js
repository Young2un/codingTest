function solution(my_string) {
    return [...my_string].filter(v => +v).reduce((a,c)=>a+(+c),0)
}