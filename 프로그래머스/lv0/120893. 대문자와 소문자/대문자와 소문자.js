function solution(my_string) {
    const upperCaseString = [...my_string.toUpperCase()];
    return [...my_string].map((v,i)=> v === upperCaseString[i] ? v.toLowerCase() : v.toUpperCase()).join('')
}