function solution(people, limit) {
    const sortPeople = people.sort((a, b) => b- a);
    let count = 0
    let start = 0
    let last = sortPeople.length-1
    
    while(start <= last){
        const length = sortPeople.length
        if(sortPeople[start] + sortPeople[last] > limit){
            start++
            
        }else {
            start++
            last--
        }
            count++
    }
    return count
    
}
