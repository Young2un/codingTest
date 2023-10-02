function solution(my_string) {
    // return [...my_string].filter(v=> +v || v ==='0').sort((a,b)=>a-b).map(v=>+v)
    return [...my_string].filter(v=> !isNaN(v)).sort((a,b)=>a-b).map(v=>+v)
}