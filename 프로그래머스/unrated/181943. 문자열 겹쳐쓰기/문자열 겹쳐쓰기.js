function solution(my_string, overwrite_string, s) {
    const result = [...my_string]
    result.splice(s ,overwrite_string.length ,overwrite_string)
    return result.join('')
}