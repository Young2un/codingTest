function solution(numbers, direction) {
       const last = numbers.at(-1)
       const first = numbers[0]
    
    if(direction ==='right'){
        const nums = numbers.slice(0,numbers.length-1)
        return [last,...nums]
    }else{
        const nums = numbers.slice(1,numbers.length)
        return [...nums,first]
    }
}