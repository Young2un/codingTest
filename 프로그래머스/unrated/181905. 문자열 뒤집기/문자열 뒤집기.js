function solution(my_string, s, e) {
    const result = my_string.slice(s,e+1)
    const reverse =[...result].reverse().join('')
    
    return [my_string.slice(0,s),reverse,my_string.slice(e+1)].join('')
    // console.log(reverse.join(''))
}