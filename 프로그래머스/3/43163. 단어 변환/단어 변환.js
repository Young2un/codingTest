function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    const queue = [[begin,0]]
    const visited = new Set();
    
    while(queue.length > 0){
        const [current, count] = queue.shift();
        
        if(current === target)  return count;
        
        for(let i=0; i<words.length; i++){
            let diff = 0
            for(let j=0; j<current.length;j++){
                if(current[j] !==words[i][j]){
                    diff ++
                }
                if(diff>1) break;
            }
            if(diff ===1 && !visited.has(words[i])){
                visited.add(words[i])
                queue.push([words[i],count+1])
            }
        }
    }
    
}